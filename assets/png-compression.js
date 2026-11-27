(function () {
  window.imagecCompressPng = async function (canvas, quality, targetBytes, level) {
    const { width, height } = canvas;
    const { data } = canvas.getContext("2d").getImageData(0, 0, width, height);
    const colorLimit = quality >= 90 ? 0 : Math.round(16 * 16 ** ((quality - 1) / 88));
    const worker = new Worker("/assets/png-compression-worker.js");
    try {
      return await new Promise((resolve, reject) => {
        worker.onmessage = ({ data: result }) => {
          if (result.error) {
            reject(new Error(result.error));
            return;
          }
          resolve({
            blob: new Blob([result.buffer], { type: "image/png" }),
            reducedColors: result.reducedColors,
          });
        };
        worker.onerror = reject;
        worker.onmessageerror = reject;
        worker.postMessage({ buffer: data.buffer, width, height, colorLimit, targetBytes, level }, [data.buffer]);
      });
    } finally {
      worker.terminate();
    }
  };
})();
