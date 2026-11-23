import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { randomUUID } from "node:crypto";
import { chromium } from "playwright";
import JSZip from "jszip";

const token = randomUUID();
const dataDir = await mkdtemp(join(tmpdir(), "imagec-qa-"));
const preview = spawn(process.execPath, ["scripts/preview.mjs"], {
  env: { ...process.env, HOST: "127.0.0.1", PORT: "18763", FEEDBACK_TOKEN: token, IMAGEC_FEEDBACK_DATA_DIR: dataDir },
  stdio: ["ignore", "pipe", "inherit"],
});
const origin = "http://127.0.0.1:18763";
let browser;

try {
  const [startup] = await Promise.race([
    once(preview.stdout, "data"),
    once(preview, "exit").then(([code]) => { throw new Error("Preview exited before listening: " + code); }),
  ]);
  assert.match(String(startup), /imagec preview/);
  const sitemap = await readFile("sitemap.xml", "utf8");
  const routes = [...sitemap.matchAll(/<loc>https:\/\/imagec\.xin([^<]+)<\/loc>/g)].map((match) => match[1]);
  for (const route of new Set([...routes, "/inbox", "/version.json", "/robots.txt", "/sitemap.xml"])) {
    assert.equal((await fetch(origin + route)).status, 200, route);
  }

  browser = await chromium.launch({ channel: process.env.IMAGEC_BROWSER_CHANNEL });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 }, reducedMotion: "reduce" });
  const go = (route) => page.goto(origin + route + "?lang=zh", { waitUntil: "domcontentloaded" });
  await go("/");
  const tools = await page.locator("#toolsGrid a.toolCard").evaluateAll((links) => [...new Set(links.map((link) => link.pathname))]);
  assert.equal(tools.length, 24);
  for (const tool of tools) {
    assert.equal((await go(tool)).status(), 200, tool);
    await page.locator("main h1").waitFor();
    assert.ok(await page.locator("main .hero").evaluate((el) => el.scrollWidth <= Math.ceil(el.getBoundingClientRect().width)), tool);
  }
  console.log("PASS 24 tool routes and mobile headers");

  const source = await page.evaluate(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 800;
    const context = canvas.getContext("2d");
    const image = context.createImageData(canvas.width, canvas.height);
    let noise = 123;
    for (let i = 0; i < image.data.length; i++) {
      noise = (Math.imul(noise, 1664525) + 1013904223) >>> 0;
      image.data[i] = i % 4 === 3 ? 255 : noise >>> 24;
    }
    context.putImageData(image, 0, 0);
    return canvas.toDataURL().split(",")[1];
  });
  const file = (name, buffer = Buffer.from(source, "base64")) => ({ name, mimeType: "image/png", buffer });
  async function click(selector) {
    const control = page.locator(selector);
    if (!(await control.isVisible())) {
      const summary = control.locator("xpath=ancestor::details[1]/summary");
      if (await summary.count()) await summary.click();
    }
    await control.click();
  }
  async function download(selector) {
    const [result] = await Promise.all([page.waitForEvent("download"), click(selector)]);
    return readFile(await result.path());
  }
  async function inspect(bytes) {
    return page.evaluate(async (base64) => {
      const bitmap = await createImageBitmap(new Blob([Uint8Array.from(atob(base64), (c) => c.charCodeAt(0))]));
      const canvas = document.createElement("canvas");
      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(bitmap, 0, 0);
      return [bitmap.width, bitmap.height, ctx.getImageData(0, 0, 1, 1).data[3]];
    }, bytes.toString("base64"));
  }

  await go("/crop");
  await page.locator("#file").setInputFiles(file("sample.png"));
  await page.locator("#sizePreset").selectOption("295x413");
  assert.deepEqual(await inspect(await download("#download")), [295, 413, 255]);
  await click('[data-ratio="circle"]');
  assert.deepEqual(await inspect(await download("#download")), [800, 800, 0]);
  console.log("PASS crop preset and transparent circle");

  await go("/compress");
  await page.locator("#file").setInputFiles(file("sample.png"));
  await click('[data-mode="target"]');
  await click('[data-kb="50"]');
  const compressed = await download("#download");
  assert.ok(compressed.length <= 50 * 1024);
  assert.equal(await page.locator("#compSize").innerText(), (compressed.length / 1024).toFixed(1) + " KB");
  console.log("PASS compression target and reported bytes");

  await go("/batch");
  await page.locator("#file").setInputFiles([file("one.png"), file("two.png"), file("broken.png", Buffer.from("invalid"))]);
  await click('[data-mode="resize"]');
  await click("#scalePercent");
  await page.locator("#scalePercent").fill("50");
  const zip = await JSZip.loadAsync(await download("#zipBtn"));
  assert.deepEqual(Object.keys(zip.files).sort(), ["one.png", "two.png"]);
  for (const entry of Object.values(zip.files)) assert.deepEqual(await inspect(await entry.async("nodebuffer")), [600, 400, 255]);
  assert.match(await page.locator("#queue").innerText(), /broken\.png[\s\S]*加载失败/);
  console.log("PASS batch output dimensions and corrupt-file handling");

  const api = origin + "/api/feedback";
  const headers = { "Content-Type": "application/json", Authorization: "Bearer " + token };
  assert.equal((await fetch(api)).status, 401);
  assert.equal((await fetch(api, { method: "POST", headers, body: "{}" })).status, 400);
  await go("/");
  await page.locator(".feedbackOpen").first().click();
  await page.locator("#feedbackContent").fill("Local QA");
  const [sent] = await Promise.all([
    page.waitForResponse((response) => response.url() === api && response.request().method() === "POST"),
    page.locator("#feedbackSend").click(),
  ]);
  assert.equal(sent.status(), 201);
  await page.locator("#feedbackSuccess").waitFor();
  const { id } = await sent.json();
  const list = async () => (await (await fetch(api, { headers })).json()).items;
  assert.equal((await list()).find((item) => item.id === id).message, "Local QA");
  assert.equal((await fetch(api + "/" + id, { method: "PATCH", headers, body: JSON.stringify({ status: "done", read: true }) })).status, 200);
  assert.equal((await list()).find((item) => item.id === id).status, "done");
  assert.equal((await fetch(api + "/" + id, { method: "DELETE", headers })).status, 200);
  assert.equal((await list()).length, 0);
  console.log("PASS feedback submit, authorization, processing and deletion");
} finally {
  await browser?.close();
  if (preview.exitCode === null) {
    const exited = once(preview, "exit");
    preview.kill();
    await exited;
  }
  await rm(dataDir, { recursive: true, force: true });
}
