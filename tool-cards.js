/* Canonical tool cards. Home and every related-tools grid render from here. */
(function () {
  var SVG_OPEN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">';
  var SEARCH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>';
  var TOOLS = [
    {file:"whitebg", keywords:"背景 去白 透明 png 白底 remove white background", titleKey:"cardWhitebgTitle", title:"去白底", descKey:"cardWhitebgDesc", desc:"把白色背景变成透明 PNG", svg:'<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 15.5 11 12l2 2 2.5-3L18 15.5"/>'},
    {file:"cutout", keywords:"AI 抠图 去背景 remove background cutout", titleKey:"cardCutoutTitle", title:"AI 抠图", descKey:"cardCutoutDesc", desc:"本地 AI 去掉背景，导出透明 PNG", svg:'<circle cx="8" cy="7" r="2"/><path d="M5.2 19c.4-2.4 1.5-3.6 2.8-3.6s2.4 1.2 2.8 3.6"/><circle cx="16.2" cy="8.2" r="1.5"/><circle cx="16.2" cy="15.8" r="1.5"/><path d="M14.8 9.2 11.2 12l3.6 2.8"/>'},
    {file:"compress", keywords:"压缩 减小 体积 png jpg webp compress", titleKey:"cardCompressTitle", title:"图片压缩", descKey:"cardCompressDesc", desc:"缩小 PNG、JPG、WebP，尽量保住画质", svg:'<path d="M8 3H4v4M16 3h4v4M8 21H4v-4M16 21h4v-4M7 12h10"/>'},
    {file:"convert", keywords:"转换 格式 png jpg webp bmp convert", titleKey:"cardConvertTitle", title:"格式转换", descKey:"cardConvertDesc", desc:"PNG、JPG、WebP、BMP 互转", svg:'<path d="M4 7h11l-2.5-2.5M20 17H9l2.5 2.5"/><path d="M15 4.5 17.5 7 15 9.5M9 14.5 6.5 17 9 19.5"/>'},
    {file:"batch", keywords:"批量 压缩 转换 zip 打包 batch compress convert", titleKey:"cardBatchTitle", title:"批量处理", descKey:"cardBatchDesc", desc:"一次压缩或转换多张图，打包 ZIP", svg:'<rect x="6" y="3" width="12" height="12" rx="2"/><path d="M4 8v11a2 2 0 0 0 2 2h11"/>'},
    {file:"qr", keywords:"二维码 qr qrcode 免费生成二维码 链接转二维码 文字生成二维码", titleKey:"cardQrTitle", title:"免费生成二维码", descKey:"cardQrDesc", desc:"输入链接或文字，本地生成二维码 PNG", svg:'<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z"/><path d="M14 14h2.5v2.5H14zM17.5 17.5H20V20h-2.5zM14 18h2"/>'},
    {file:"round", keywords:"圆角 阴影 投影 圆角阴影 图片加圆角 图片加阴影 rounded shadow corner", titleKey:"cardRoundTitle", title:"圆角阴影", descKey:"cardRoundDesc", desc:"给图片加圆角或阴影，导出 PNG", svg:'<rect x="4" y="4" width="13" height="13" rx="4"/><path d="M9 17h8a2 2 0 0 0 2-2V9"/>'},
    {file:"crop", keywords:"裁剪 缩放 尺寸 crop resize", titleKey:"cardCropTitle", title:"裁剪缩放", descKey:"cardCropDesc", desc:"裁切一块，或改成指定尺寸", svg:'<path d="M7 3v12a2 2 0 0 0 2 2h12"/><path d="M3 7h12a2 2 0 0 1 2 2v12"/>'},
    {file:"idphoto", keywords:"证件照 蓝底 白底 红底 id photo", titleKey:"cardIdphotoTitle", title:"证件照换底", descKey:"cardIdphotoDesc", desc:"蓝底、白底、红底证件照", svg:'<rect x="4" y="5" width="16" height="14" rx="2"/><circle cx="10" cy="11" r="2"/><path d="M7 16c.6-1.4 1.7-2 3-2s2.4.6 3 2M14 10h3M14 13h3"/>'},
    {file:"watermark", keywords:"水印 watermark", titleKey:"cardWatermarkTitle", title:"加水印", descKey:"cardWatermarkDesc", desc:"加文字或图片水印", svg:'<path d="M5 19 19 5"/><path d="M8 6h.01M6 8h.01M16 16h.01M18 18h.01"/>'},
    {file:"bgcolor", keywords:"背景色 透明 png 纯色 渐变 background color", titleKey:"cardBgcolorTitle", title:"换背景色", descKey:"cardBgcolorDesc", desc:"给透明图铺纯色或渐变", svg:'<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/>'},
    {file:"splice", keywords:"拼接 长图 stitch", titleKey:"cardSpliceTitle", title:"图片拼接", descKey:"cardSpliceDesc", desc:"把多张图拼成一张", svg:'<rect x="3" y="5" width="7" height="14" rx="1.5"/><rect x="14" y="5" width="7" height="14" rx="1.5"/>'},
    {file:"img2pdf", keywords:"pdf 转pdf", titleKey:"cardPdfTitle", title:"图片转 PDF", descKey:"cardPdfDesc", desc:"把多张图合成一个 PDF", svg:'<path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5M8 15h8M8 18h5"/>'},
    {file:"filter", keywords:"滤镜 亮度 对比度 饱和度 filter", titleKey:"cardFilterTitle", title:"滤镜调色", descKey:"cardFilterDesc", desc:"亮度、对比度、饱和度和预设滤镜", svg:'<path d="M4 7h16M7 12h10M10 17h4"/>'},
    {file:"heic", keywords:"HEIC HEIF 苹果 iPhone 转换 JPG PNG heic", titleKey:"cardHeicTitle", title:"转换 HEIC", descKey:"cardHeicDesc", desc:"苹果 HEIC 转 JPG/PNG", svg:'<rect x="3" y="6" width="8" height="12" rx="1.5"/><path d="M13 12h7M17 9l3 3-3 3"/>'},
    {file:"rotate", keywords:"旋转 翻转 rotate flip 镜像", titleKey:"cardRotateTitle", title:"旋转翻转", descKey:"cardRotateDesc", desc:"旋转或镜像图片", svg:'<path d="M20 8a8 8 0 0 0-13.7-4L4 6"/><path d="M4 3v3.5h3.5"/><path d="M4 16a8 8 0 0 0 13.7 4L20 18"/><path d="M20 21v-3.5h-3.5"/>'},
    {file:"exif", keywords:"EXIF GPS 元数据 隐私 metadata 清除", titleKey:"cardExifTitle", title:"清除元数据", descKey:"cardExifDesc", desc:"去掉 EXIF/GPS 等隐私信息", svg:'<path d="M12 3 5 6v5c0 4 2.7 6.8 7 8 4.3-1.2 7-4 7-8V6l-7-3z"/><path d="M9 12h6"/>'},
    {file:"pdf2img", keywords:"PDF 转图片 pdf to image 拆页", titleKey:"cardPdf2imgTitle", title:"PDF 转图片", descKey:"cardPdf2imgDesc", desc:"把 PDF 每一页导出成图片", svg:'<path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5M9 14h6M9 17h4"/>'},
    {file:"palette", keywords:"色板 取色 配色 palette colors hex", titleKey:"cardPaletteTitle", title:"色板提取", descKey:"cardPaletteDesc", desc:"从图片提取主色并复制色值", svg:'<rect x="4" y="5" width="5" height="14" rx="1"/><rect x="10" y="5" width="5" height="14" rx="1"/><rect x="16" y="5" width="4" height="14" rx="1"/>'},
    {file:"favicon", keywords:"favicon 图标 app icon 网站图标", titleKey:"cardFaviconTitle", title:"Favicon 包", descKey:"cardFaviconDesc", desc:"一键导出多尺寸网站图标", svg:'<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>'},
    {file:"barcode", keywords:"条形码 barcode EAN CODE128", titleKey:"cardBarcodeTitle", title:"条形码生成", descKey:"cardBarcodeDesc", desc:"生成 EAN / CODE128 等条形码", svg:'<path d="M4 5h1.2v14H4zM7 5h.8v14H7zM9.5 5H11v14H9.5zM13 5h2v14h-2zM17 5h.7v14H17zM19 5h1v14H19z"/>'},
    {file:"gifsplit", keywords:"GIF 拆帧 动图 帧 gif frames", titleKey:"cardGifsplitTitle", title:"GIF 拆帧", descKey:"cardGifsplitDesc", desc:"把 GIF 拆成逐帧 PNG", svg:'<rect x="3" y="6" width="10" height="12" rx="1.5"/><rect x="11" y="4" width="10" height="12" rx="1.5"/><path d="M14 10h4M14 13h3"/>'},
    {file:"ocr", keywords:"OCR 文字识别 提取文字 tesseract 扫描件", titleKey:"cardOcrTitle", title:"图片转文字", descKey:"cardOcrDesc", desc:"本地 OCR 识别图片里的文字", svg:'<rect x="4" y="5" width="16" height="14" rx="2"/><path d="M8 10h8M8 14h5"/>'},
    {file:"svgopt", keywords:"SVG 优化 压缩 矢量 optimize minify", titleKey:"cardSvgoptTitle", title:"SVG 优化", descKey:"cardSvgoptDesc", desc:"精简 SVG，减小体积", svg:'<path d="M4 16 8 8l4 6 3-4 5 6"/><path d="M4 19h16"/>'}
  ];

  function esc(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  }

  function cardHtml(tool) {
    return '<a href="/' + tool.file + '" class="toolCard" data-keywords="' + esc(tool.keywords) + '">' +
      '<span class="tc-icon">' + SVG_OPEN + tool.svg + '</svg></span>' +
      '<span class="tc-body"><strong data-i18n="' + tool.titleKey + '">' + esc(tool.title) + '</strong>' +
      '<span class="tc-desc" data-i18n="' + tool.descKey + '">' + esc(tool.desc) + '</span></span></a>';
  }

  function pageFile() {
    var path = (location.pathname || "/").split("/").pop() || "";
    path = path.toLowerCase();
    if (path.slice(-5) === ".html") path = path.slice(0, -5);
    if (!path || path === "index") return "";
    return path;
  }

  function filterGrid(grid, empty, query) {
    var q = (query || "").trim().toLowerCase();
    var visible = 0;
    var cards = grid.querySelectorAll(".toolCard");
    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      if (!q) {
        card.classList.remove("hidden");
        visible++;
        continue;
      }
      var text = (card.textContent + " " + (card.getAttribute("data-keywords") || "")).toLowerCase();
      var match = text.indexOf(q) !== -1;
      card.classList.toggle("hidden", !match);
      if (match) visible++;
    }
    if (empty) empty.classList.toggle("show", q !== "" && visible === 0);
  }

  function ensureSearch(section, grid) {
    if (!section || !grid || section.querySelector("[data-tool-search]")) return;
    var wrap = document.createElement("div");
    wrap.className = "searchWrap";
    wrap.setAttribute("data-tool-search", "1");
    wrap.innerHTML = SEARCH_ICON +
      '<input class="searchInput" type="search" data-i18n-ph="searchPlaceholder" placeholder="搜索工具…" autocomplete="off" aria-label="搜索工具" data-chrome-aria="searchTools" />';
    var empty = document.createElement("div");
    empty.className = "searchEmpty";
    empty.setAttribute("data-i18n", "searchEmpty");
    empty.setAttribute("role", "status");
    empty.textContent = "没有匹配的工具";
    section.insertBefore(wrap, grid);
    if (grid.nextSibling) section.insertBefore(empty, grid.nextSibling);
    else section.appendChild(empty);
    var input = wrap.querySelector(".searchInput");
    input.addEventListener("input", function () {
      filterGrid(grid, empty, input.value);
    });
  }

  function mount(root, excludeFile) {
    if (!root) return;
    var html = "";
    for (var i = 0; i < TOOLS.length; i++) {
      if (excludeFile && TOOLS[i].file === excludeFile) continue;
      html += cardHtml(TOOLS[i]);
    }
    root.innerHTML = html;
    root.setAttribute("data-cards-source", "tool-cards");
  }

  function mountAll() {
    var home = document.getElementById("toolsGrid");
    if (home && document.body.classList.contains("home")) mount(home, "");
    var current = pageFile();
    var grids = document.querySelectorAll("[data-tool-cards]");
    for (var i = 0; i < grids.length; i++) {
      if (grids[i] === home) continue;
      mount(grids[i], current);
      var section = grids[i].closest(".relatedTools, .toolsShowcase");
      ensureSearch(section || grids[i].parentNode, grids[i]);
    }
  }

  window.imagecToolCards = {tools: TOOLS, mountAll: mountAll};
})();
