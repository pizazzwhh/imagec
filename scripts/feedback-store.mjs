import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_DIR = path.join(ROOT, "data");
const STORE_FILE = path.join(DATA_DIR, "feedback.jsonl");
const TOKEN_FILE = path.join(DATA_DIR, "feedback-token.txt");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

export function getFeedbackToken() {
  if (process.env.FEEDBACK_TOKEN && String(process.env.FEEDBACK_TOKEN).trim()) {
    return String(process.env.FEEDBACK_TOKEN).trim();
  }
  ensureDataDir();
  if (fs.existsSync(TOKEN_FILE)) {
    const existing = fs.readFileSync(TOKEN_FILE, "utf8").trim();
    if (existing) return existing;
  }
  const token = crypto.randomBytes(18).toString("base64url");
  fs.writeFileSync(TOKEN_FILE, token + "\n", "utf8");
  return token;
}

function normalizeEntry(raw, id) {
  const type = raw && (raw.type === "bug" || raw.type === "other") ? raw.type : "suggest";
  return {
    id: id || (raw && raw.id) || crypto.randomUUID(),
    type,
    message: String((raw && raw.message) || "").trim().slice(0, 8000),
    contact: String((raw && raw.contact) || "").trim().slice(0, 200),
    page: String((raw && raw.page) || "/").trim().slice(0, 300),
    lang: String((raw && raw.lang) || "").trim().slice(0, 16),
    userAgent: String((raw && raw.userAgent) || "").trim().slice(0, 400),
    createdAt: (raw && raw.createdAt) || new Date().toISOString(),
    read: !!(raw && raw.read),
    status: (raw && raw.status) || "open"
  };
}

export function appendFeedback(raw) {
  const message = String((raw && raw.message) || "").trim();
  if (!message) {
    const err = new Error("message required");
    err.code = "NEED_MESSAGE";
    throw err;
  }
  ensureDataDir();
  const entry = normalizeEntry(raw);
  fs.appendFileSync(STORE_FILE, JSON.stringify(entry) + "\n", "utf8");
  return entry;
}

export function listFeedback() {
  ensureDataDir();
  if (!fs.existsSync(STORE_FILE)) return [];
  const lines = fs.readFileSync(STORE_FILE, "utf8").split(/\r?\n/).filter(Boolean);
  const items = [];
  for (const line of lines) {
    try {
      const parsed = JSON.parse(line);
      items.push(normalizeEntry(parsed, parsed.id));
    } catch {
      /* skip bad line */
    }
  }
  items.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  return items;
}

function rewriteAll(items) {
  ensureDataDir();
  const body = items.map((item) => JSON.stringify(item)).join("\n");
  fs.writeFileSync(STORE_FILE, body ? body + "\n" : "", "utf8");
}

export function updateFeedback(id, patch) {
  const items = listFeedback();
  const idx = items.findIndex((item) => item.id === id);
  if (idx < 0) {
    const err = new Error("not found");
    err.code = "NOT_FOUND";
    throw err;
  }
  const next = { ...items[idx] };
  if (patch && typeof patch.read === "boolean") next.read = patch.read;
  if (patch && (patch.status === "open" || patch.status === "done" || patch.status === "spam")) {
    next.status = patch.status;
  }
  items[idx] = next;
  rewriteAll(items);
  return next;
}

export function deleteFeedback(id) {
  const items = listFeedback();
  const next = items.filter((item) => item.id !== id);
  if (next.length === items.length) {
    const err = new Error("not found");
    err.code = "NOT_FOUND";
    throw err;
  }
  rewriteAll(next);
  return true;
}

export function storePaths() {
  return { root: ROOT, dataDir: DATA_DIR, storeFile: STORE_FILE, tokenFile: TOKEN_FILE };
}
