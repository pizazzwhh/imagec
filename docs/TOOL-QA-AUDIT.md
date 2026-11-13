# imagec 全站工具走查报告

**日期**：2026-11-12  
**环境**：本机 `npm run preview` → http://127.0.0.1:8080  
**范围**：`tool-cards.js` 全部 24 个工具 + 首页 / 反馈 / inbox；**不含** AI 超分（本阶段不做）  
**方法**：全路由 HTTP 冒烟 + 代码审读 + Playwright 合成图抽测 + 浏览器点选生成类工具  

---

## 结论摘要

路由与首页搜索整体健康（24 工具均 200；搜「OCR / SVG」能命中）。真正伤体验的是几处**导出分辨率 / 所见非所得**，以及文案与 CDN 兜底滞后。下面按优先级排列，方便你勾选下一轮修哪些。

---

## P0 — 建议优先修（结果不对）

| # | 工具 | 问题 | 状态 |
|---|------|------|------|
| 1 | **换背景色** `/bgcolor` | 下载被锁在预览上限 1200px | **已修**（2026-11-12）：预览仍 ≤1200，下载 `renderAtSize` 原图；抽测 1600×1000 → 导出 1600×1000 |
| 2 | **证件照换底** `/idphoto` | 未选手寸时下载上限 1000px | **已修**（2026-11-12）：无尺寸包下载全分辨率；有尺寸包仍出目标像素；抽测 1800×1200 → 导出 1800×1200 |

---

## P1 — 明确缺陷 / 易踩坑

| # | 位置 | 问题 | 状态 |
|---|------|------|------|
| 3 | **加水印** `/watermark` | 导出字号/水印不按预览比例放大 | **已修**：导出乘以 `origW/previewW` |
| 4 | **批量** 等 | HEIC accept + 非链接 tip | **已修**：tip 链到 `/heic`；accept 去掉 HEIC |
| 5 | **chrome.js** | 非中英 heicTip 仍写不支持 | **已修**：各语言改为引导转换 HEIC |
| 6 | **首页 SEO/FAQ** | 仍写 13 / 10+ | **已修**：改为 24，并更新 featureList |
| 7 | **首页静态网格** | 缺半套新工具 | **已修**：静态 `#toolsGrid` 与 24 张卡片对齐 |
| 8 | **圆形裁剪** `/crop` | 圆形文案缺语言 | **已修**：补全各 locale 的 `btnCircleMode` / `circleHint` |
| 9 | **CDN 单点** | OCR / barcode / pdf.js / gifuct | **已修**：增加 jsDelivr fastly / unpkg fallback |
| 10 | **AI 抠图** `/cutout` | 加载失败误报 `errRun` | **已修**：改为 `errLoad`（多语言） |
| 11 | **站内链** | `/xxx.html` vs `/xxx` | **已修**：工具页英雄/相关链去掉 `.html` |

---

## P2 — 体验与打磨

| # | 位置 | 问题 | 状态 |
|---|------|------|------|
| 12 | `/svgopt` | 「去掉 XML 声明」勾选语义 | **已修**：确认勾选=strip；注释对齐 |
| 13 | `/barcode` | `body` 借 `qr` class | **已修**：`tool barcode` + site.css 空态 |
| 14 | `/compress` | PNG「质量」易误解 | **已修**：`qualityPng` / `qualityJpg` 分文案 |
| 15 | 多工具 | 重活进度感不足 | **已修**：whitebg/cutout/heic/pdf/gif 等 `computing`；OCR/PDF 原有进度文案保留 |
| 16 | 工作室布局 | 主控件折进 advanced | **已修**：foldStudio 保留 rotate/position/color/grid9/文本 |
| 17 | `/watermark` | 默认 `© imagec`；旋转仅平铺 | **已修**：默认空 + placeholder；旋转常显 |
| 18 | `/pdf2img` `/gifsplit` | 上限提示不清 | **已修**：emptyTitle 写明 100 页 / 300 帧 |
| 19 | `/palette` | 缩边采样无说明 | **已修**：`sampleNote` 提示约 1400px |
| 20 | `/ocr` | 小屏结果挤 | **已修**：≤720px 结果沉底 + textarea 高度 |
| 21 | 反馈弹层 | 非中文基本英语 | **已修**：`guideLang` 中/英包（站点语言 zh→中文，其余→英） |
| 22 | `/inbox` | 状态芯片英文 raw | **已修**：未处理 / 已处理 / 垃圾 |
| 23 | 多语言 chrome | 新工具名仍英文 | **已修**：es/fr/de/ru/pt/ar/vi/id/th 补译 name/desc |
| 24 | 残留品牌 | SEO/页脚 “Frame” | **已修**：相关页 brand/title/footer → imagec |
| 25 | JSON-LD / FAQ | 未覆盖新能力 | **已修**：featureList + FAQ「有哪些工具」对齐 24 项 |

---

## 本轮已验证为正常 / 未复现硬伤

| 项 | 结果 |
|----|------|
| 24 工具 + inbox/sponsors 路由 | 全部 HTTP 200 |
| `npm run smoke:live`（抽样 10 页） | 全 PASS |
| 首页搜索 OCR / SVG | 仅命中 `/ocr`、`/svgopt` |
| 二维码 `/qr` | 输入链接后可生成预览（512 canvas），下载可点 |
| 条形码 `/barcode` | 可生成（`body.tool.barcode`） |
| 压缩页 | 存在「原图 / 压缩后」对比文案 |
| 反馈入口 | 页脚「反馈 & 建议」存在（完整提交依赖 preview API，此前已接） |

**未做完整真机上传验收的工具**（建议你过目文档后按需点名加深测）：去白底大图性能、AI 抠图模型下载、HEIC 真文件、PDF 多页内存、GIF 长动画、OCR 中文识别率、滤镜/拼接/圆角视觉细节。代码层问题已记入上表。

---

## 建议修复顺序（供你拍板）

1. **P0**：`bgcolor` + `idphoto` 原分辨率导出  
2. **P1**：`watermark` 比例缩放；HEIC tip 链接化 + chrome 文案；首页 13→24  
3. **P1**：CDN fallback（OCR / barcode / pdf2img / gifsplit）  
4. **P2**：**已修**（2026-11-12）  
5. **P3**（OCR `/ocr` + SVG `/svgopt`）：**已实现**；`npm run smoke:p3` 本机全 PASS（搜 OCR/SVG、SVG 去声明/注释、英文 OCR 识别 `HELLO OCR`）。AI 超分仍不做。

---

## 附录：抽测数据（Playwright 合成图）

| 工具 | 输入 | 预览 canvas |
|------|------|-------------|
| idphoto | 1800×1200 | 1000×667 |
| bgcolor | 1600×1000 | 1200×750 |
| watermark | 1800×1200 | 1200×800（下载另渲原尺寸，但字号不放大） |
| qr | 文本 | 512×512 |

临时脚本：`scripts/_qa-audit.mjs`（可删；仅本机抽测用）。
