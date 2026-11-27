(function () {
  const profiles = {
    light:    { quality: 78, rms: 2.6, pixel: 11, palettes: [] },
    standard: { quality: 60, rms: 4.4, pixel: 18, palettes: [512, 256] },
    strong:   { quality: 48, rms: 7.5, pixel: 29, palettes: [512, 256, 128, 64] },
    extreme:  { quality: 36, rms: 11,  pixel: 40, palettes: [512, 256, 128, 64, 32, 16] },
  };
  const qualitySteps = [36, 48, 60, 70, 78, 84, 90, 94, 97, 100];

  function withinBudget(reference, output, profile) {
    if (reference.length !== output.length) return false;
    const stride = Math.max(1, Math.ceil(reference.length / (4 * 262144))) * 4;
    const pixelLimit = 3 * profile.pixel ** 2;
    let squared = 0, count = 0, outliers = 0;
    for (let i = 0; i < reference.length; i += stride) {
      const opacity = reference[i + 3];
      if (opacity !== output[i + 3]) return false;
      const r = reference[i] - output[i];
      const g = reference[i + 1] - output[i + 1];
      const b = reference[i + 2] - output[i + 2];
      const error = (r * r + g * g + b * b) * (opacity / 255) ** 2;
      squared += error;
      count++;
      if (error > pixelLimit) outliers++;
    }
    return squared <= 3 * count * profile.rms ** 2 && outliers <= count * 0.025;
  }

  async function encodePreset(canvas, level, encode, resized, isCurrent) {
    const profile = profiles[level];
    const columns = canvas.width > 512 ? 4 : 1;
    const rows = canvas.height > 512 ? 4 : 1;
    const tileWidth = columns === 1 ? canvas.width : 128;
    const tileHeight = rows === 1 ? canvas.height : 128;
    const sample = document.createElement("canvas");
    sample.width = tileWidth * columns;
    sample.height = tileHeight * rows;
    const context = sample.getContext("2d", { willReadFrequently: true });

    // Compare native-resolution patches to avoid mismatched resampling artifacts.
    function samplePixels(image) {
      context.clearRect(0, 0, sample.width, sample.height);
      for (let row = 0; row < rows; row++) {
        const y = rows === 1 ? 0 : Math.round(row * (canvas.height - tileHeight) / (rows - 1));
        for (let col = 0; col < columns; col++) {
          const x = columns === 1 ? 0 : Math.round(col * (canvas.width - tileWidth) / (columns - 1));
          context.drawImage(image, x, y, tileWidth, tileHeight, col * tileWidth, row * tileHeight, tileWidth, tileHeight);
        }
      }
      return context.getImageData(0, 0, sample.width, sample.height).data;
    }
    const reference = samplePixels(canvas);
    let fallback = null;
    for (const quality of qualitySteps) {
      if (!isCurrent()) return null;
      if (quality < profile.quality) continue;
      const blob = await encode(quality);
      if (!blob) break;
      fallback = blob;
      const bitmap = await createImageBitmap(blob);
      try {
        if (withinBudget(reference, samplePixels(bitmap), profile)) return blob;
      } finally {
        bitmap.close();
      }
    }
    return resized ? fallback : null;
  }

  globalThis.imagecCompressionQuality = { profiles, withinBudget, encodePreset };
})();
