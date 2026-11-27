/* UPNG's browser build expects the window global during initialization. */
self.window = self;
importScripts("./compression-quality.js", "./vendor/png/pako-2.1.0.min.js", "./vendor/png/upng-2.1.0.js");

function limitColors(pixels, count) {
  const colors = pixels.slice();
  for (let i = 0; i < colors.length; i += 4) {
    if (pixels[i + 3] === 0) colors.fill(0, i, i + 3);
    colors[i + 3] = 255;
  }
  const { bufs } = UPNG.quantize([colors.buffer], count, false);
  const result = new Uint8Array(bufs[0]);
  for (let i = 3; i < result.length; i += 4) result[i] = pixels[i];
  return result.buffer;
}

self.onmessage = ({ data: { buffer, width, height, colorLimit, targetBytes, level } }) => {
  try {
    const pixels = new Uint8Array(buffer);
    let best = UPNG.encode([buffer], width, height, 0);
    let reducedColors = false;
    const profile = imagecCompressionQuality.profiles[level];
    const limits = targetBytes ? [256, 128, 64, 32, 16] : profile ? profile.palettes : colorLimit ? [colorLimit] : [];
    for (const limit of limits) {
      if (targetBytes && best.byteLength <= targetBytes) break;
      // An indexed PNG with this many colors already needs no quantization.
      const header = new Uint8Array(best, 0, 26);
      if (header[25] === 3 && (1 << header[24]) <= limit) continue;
      const colors = limitColors(pixels, limit);
      if (!targetBytes && profile && !imagecCompressionQuality.withinBudget(pixels, new Uint8Array(colors), profile)) break;
      const candidate = UPNG.encode([colors], width, height, 0);
      if (candidate.byteLength < best.byteLength) {
        best = candidate;
        reducedColors = true;
      }
    }
    self.postMessage({ buffer: best, reducedColors }, [best]);
  } catch (error) {
    self.postMessage({ error: error.message });
  }
};

