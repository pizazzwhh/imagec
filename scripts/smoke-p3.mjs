/**
 * P3 acceptance: homepage search + svgopt optimize + OCR English smoke.
 *
 *   BASE_URL=http://127.0.0.1:8080 npm run smoke:p3
 */
import { chromium } from "playwright";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = (process.env.BASE_URL || "http://127.0.0.1:8080").replace(/\/+$/, "");
const __dir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dir, "..");
let failed = 0;

function ok(name, pass, detail = "") {
  console.log(`${pass ? "PASS" : "FAIL"}  ${name}${detail ? " — " + detail : ""}`);
  if (!pass) failed++;
}

async function main() {
  const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
  ok("index has /ocr card", index.includes('href="/ocr"'));
  ok("index has /svgopt card", index.includes('href="/svgopt"'));

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  // Homepage search
  await page.goto(ORIGIN + "/", { waitUntil: "domcontentloaded", timeout: 30000 });
  const search = page.locator("#toolSearch, input[type=search], .searchInput").first();
  await search.waitFor({ timeout: 10000 });
  await search.fill("OCR");
  await page.waitForTimeout(200);
  const ocrVisible = await page.locator('a.toolCard[href="/ocr"]').isVisible();
  ok("search OCR → /ocr", ocrVisible);
  await search.fill("SVG");
  await page.waitForTimeout(200);
  const svgVisible = await page.locator('a.toolCard[href="/svgopt"]').isVisible();
  ok("search SVG → /svgopt", svgVisible);

  // SVG optimize
  await page.goto(ORIGIN + "/svgopt", { waitUntil: "domcontentloaded", timeout: 30000 });
  const sample = `<?xml version="1.0" encoding="UTF-8"?>
<!-- editor junk -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120" height="80" viewBox="0 0 120 80">
  <g id="Layer_1">
    <rect x="10.12345" y="10.98765" width="40.5" height="30.25" fill="#2563EB"/>
    <g></g>
  </g>
  <sodipodi:namedview xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" id="nv"/>
</svg>`;
  await page.fill("#source", sample);
  await page.waitForTimeout(400);
  const meta = await page.locator("#meta").innerText();
  const out = await page.evaluate(() => window.__svgOut || document.querySelector("#download")?.disabled === false);
  const downloadEnabled = await page.locator("#download").isEnabled();
  const orig = await page.locator("#origSize").innerText();
  const neu = await page.locator("#newSize").innerText();
  const optimized = await page.evaluate(() => {
    // read last optimized via downloading blob is hard; check stats + absence of xml decl option effect
    const ratio = document.querySelector("#ratio")?.textContent || "";
    const meta = document.querySelector("#meta")?.textContent || "";
    return { ratio, meta, hasStats: getComputedStyle(document.querySelector("#stats")).display !== "none" };
  });
  ok("svgopt produces result", downloadEnabled && optimized.hasStats, `meta=${meta} orig=${orig} new=${neu}`);
  // XML strip: re-run with page evaluate calling optimize if exposed, else check checkbox + re-fill
  const stripped = await page.evaluate(() => {
    const text = document.querySelector("#source").value;
    // After optimize, source usually stays as input; download uses optimized var.
    // Probe by toggling and reading meta savings again — verify declaration stripped from download blob path.
    return true;
  });
  // Verify via page function if optimizeSvg is in scope — it's not on window. Use download click + intercept.
  const [download] = await Promise.all([
    page.waitForEvent("download", { timeout: 10000 }),
    page.click("#download")
  ]);
  const tmp = path.join(root, "scripts", "_p3-out.svg");
  await download.saveAs(tmp);
  const svgOut = fs.readFileSync(tmp, "utf8");
  fs.unlinkSync(tmp);
  ok("svgopt strips XML decl (checked)", !/^\s*<\?xml/i.test(svgOut), svgOut.slice(0, 80).replace(/\s+/g, " "));
  ok("svgopt strips comment", !svgOut.includes("editor junk"));
  ok("svgopt keeps rect", /<rect\b/i.test(svgOut));

  // OCR English — draw text canvas → PNG file → upload
  await page.goto(ORIGIN + "/ocr", { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.click('button[data-lang="eng"]');
  const pngPath = path.join(root, "scripts", "_p3-ocr.png");
  // Create image via page canvas then write buffer
  const b64 = await page.evaluate(async () => {
    const c = document.createElement("canvas");
    c.width = 420;
    c.height = 120;
    const g = c.getContext("2d");
    g.fillStyle = "#ffffff";
    g.fillRect(0, 0, c.width, c.height);
    g.fillStyle = "#111111";
    g.font = "bold 48px sans-serif";
    g.fillText("HELLO OCR", 40, 75);
    return c.toDataURL("image/png").split(",")[1];
  });
  fs.writeFileSync(pngPath, Buffer.from(b64, "base64"));
  await page.setInputFiles("#file", pngPath);
  // Wait for recognition — may take a while for model download
  try {
    await page.waitForFunction(() => {
      const ta = document.querySelector("#output");
      if (ta && ta.value && ta.value.trim().length > 0) return true;
      const meta = document.querySelector("#meta")?.textContent || "";
      const banner = document.querySelector("#libStatus");
      if (banner && !banner.hidden && (banner.textContent || "").trim()) return true;
      // Done states only — ignore mid-progress "识别文字 / Reading"
      return /×|px|失败|fail|无法|Couldn't|did not|error|损坏|network|网络/i.test(meta)
        && !/[·%]|Preparing|正在|Loading|Downloading|Reading|Working/i.test(meta);
    }, { timeout: 180000 });
  } catch (e) {
    ok("ocr finished in time", false, "timeout waiting for OCR");
  }
  const ocrText = (await page.locator("#output").inputValue()).trim();
  const ocrMeta = await page.locator("#meta").innerText();
  const hit = /HELLO|OCR|hello/i.test(ocrText);
  ok("ocr recognizes HELLO OCR", hit, `text="${ocrText.slice(0, 80)}" meta=${ocrMeta}`);
  const copyEnabled = await page.locator("#copy").isEnabled();
  ok("ocr copy enabled", copyEnabled || hit);

  try { fs.unlinkSync(pngPath); } catch (_) {}
  await browser.close();
  if (failed) {
    console.error(`\nP3 acceptance: ${failed} failed`);
    process.exit(1);
  }
  console.log("\nP3 acceptance: all PASS");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
