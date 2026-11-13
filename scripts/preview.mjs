#!/usr/bin/env node
/**
 * Local preview with feedback API (same origin).
 *
 *   npm run preview
 *   PORT=8080 FEEDBACK_TOKEN=secret npm run preview
 *
 * Static files + extensionless HTML (like imagec.xin).
 * POST /api/feedback
 * GET  /api/feedback          (Authorization: Bearer <token> or ?token=)
 * PATCH /api/feedback/:id
 * DELETE /api/feedback/:id
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  appendFeedback,
  deleteFeedback,
  getFeedbackToken,
  listFeedback,
  storePaths,
  updateFeedback
} from "./feedback-store.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || "127.0.0.1";

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".map": "application/json; charset=utf-8"
};

function sendJson(res, status, body) {
  const raw = JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(raw);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > 64 * 1024) {
        reject(Object.assign(new Error("too large"), { code: "TOO_LARGE" }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function tokenFromReq(req, url) {
  const header = req.headers.authorization || "";
  if (header.toLowerCase().startsWith("bearer ")) {
    return header.slice(7).trim();
  }
  return (url.searchParams.get("token") || "").trim();
}

function requireToken(req, url, res) {
  const expected = getFeedbackToken();
  const got = tokenFromReq(req, url);
  if (!got || got !== expected) {
    sendJson(res, 401, { ok: false, error: "unauthorized" });
    return false;
  }
  return true;
}

function safeJoin(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0] || "/");
  const clean = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const file = path.join(ROOT, clean);
  if (!file.startsWith(ROOT)) return null;
  return file;
}

function resolveFile(urlPath) {
  let file = safeJoin(urlPath === "/" ? "/index.html" : urlPath);
  if (!file) return null;
  if (fs.existsSync(file) && fs.statSync(file).isFile()) return file;
  if (!path.extname(file)) {
    const asHtml = file + ".html";
    if (fs.existsSync(asHtml) && fs.statSync(asHtml).isFile()) return asHtml;
    const index = path.join(file, "index.html");
    if (fs.existsSync(index) && fs.statSync(index).isFile()) return index;
  }
  return null;
}

async function handleApi(req, res, url) {
  const pathname = url.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/api/feedback" && req.method === "POST") {
    try {
      const raw = await readBody(req);
      const data = raw ? JSON.parse(raw) : {};
      const entry = appendFeedback({
        ...data,
        createdAt: new Date().toISOString()
      });
      sendJson(res, 201, { ok: true, id: entry.id });
    } catch (err) {
      if (err && err.code === "NEED_MESSAGE") return sendJson(res, 400, { ok: false, error: "need_message" });
      if (err && err.code === "TOO_LARGE") return sendJson(res, 413, { ok: false, error: "too_large" });
      if (err instanceof SyntaxError) return sendJson(res, 400, { ok: false, error: "bad_json" });
      console.error(err);
      sendJson(res, 500, { ok: false, error: "server" });
    }
    return;
  }

  if (pathname === "/api/feedback" && req.method === "GET") {
    if (!requireToken(req, url, res)) return;
    sendJson(res, 200, { ok: true, items: listFeedback() });
    return;
  }

  const itemMatch = pathname.match(/^\/api\/feedback\/([^/]+)$/);
  if (itemMatch) {
    if (!requireToken(req, url, res)) return;
    const id = decodeURIComponent(itemMatch[1]);
    try {
      if (req.method === "PATCH") {
        const raw = await readBody(req);
        const patch = raw ? JSON.parse(raw) : {};
        const item = updateFeedback(id, patch);
        sendJson(res, 200, { ok: true, item });
        return;
      }
      if (req.method === "DELETE") {
        deleteFeedback(id);
        sendJson(res, 200, { ok: true });
        return;
      }
    } catch (err) {
      if (err && err.code === "NOT_FOUND") return sendJson(res, 404, { ok: false, error: "not_found" });
      if (err instanceof SyntaxError) return sendJson(res, 400, { ok: false, error: "bad_json" });
      console.error(err);
      return sendJson(res, 500, { ok: false, error: "server" });
    }
  }

  sendJson(res, 404, { ok: false, error: "not_found" });
}

function serveStatic(req, res, url) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405);
    res.end("Method Not Allowed");
    return;
  }
  const file = resolveFile(url.pathname);
  if (!file) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not Found");
    return;
  }
  const ext = path.extname(file).toLowerCase();
  const type = TYPES[ext] || "application/octet-stream";
  const data = fs.readFileSync(file);
  res.writeHead(200, {
    "Content-Type": type,
    "Cache-Control": ext === ".html" || ext === ".js" ? "no-cache" : "public, max-age=60"
  });
  if (req.method === "HEAD") return res.end();
  res.end(data);
}

const token = getFeedbackToken();
const paths = storePaths();

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${HOST}:${PORT}`);
    if (url.pathname === "/api/feedback" || url.pathname.startsWith("/api/feedback/")) {
      await handleApi(req, res, url);
      return;
    }
    serveStatic(req, res, url);
  } catch (err) {
    console.error(err);
    if (!res.headersSent) sendJson(res, 500, { ok: false, error: "server" });
  }
});

server.on("error", (err) => {
  if (err && err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is in use. Stop the other server, or set PORT=8090.`);
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, HOST, () => {
  console.log(`imagec preview  http://${HOST}:${PORT}/`);
  console.log(`feedback inbox  http://${HOST}:${PORT}/inbox?token=${token}`);
  console.log(`store           ${paths.storeFile}`);
  console.log(`token file      ${paths.tokenFile}`);
});
