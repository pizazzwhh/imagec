# imagec 公司电脑调试验收

对照 toolc：日常只看本机预览，不以线上域名判断刚改的效果。imagec 现网有 ESA 边缘缓存（约 25–30 分钟），上线后看到旧版多半是节点缓存。

## 1. 拉代码

公司电脑打开 Cursor，打开本仓库文件夹（远程名可能是 `imagec` 或历史名 `transparent-background-tool`）。

```powershell
git pull
git status
git log -5 --oneline
```

确认没有意外未提交改动，或先弄清哪些是你本地的。

## 2. 起本地预览

在仓库根目录（有 `index.html`、`tool-cards.js` 的那一层）：

```powershell
# 推荐：带反馈 API 的预览（静态页 + /api/feedback）
npm run preview

# 仅静态、不要反馈落盘时：
# npx --yes serve -l 8080
```

浏览器打开首页：http://localhost:8080/  
硬刷新（Ctrl+F5）避免旧 JS/CSS。

终端会打印反馈收件箱链接（含 token），也可打开：

- 收件箱：http://localhost:8080/inbox
- 口令文件：`data/feedback-token.txt`（已 gitignore）

## 3. P0 验收清单

| 项 | 怎么验 |
|---|---|
| 压缩 · 目标体积 | `/compress` →「目标体积」→ 选 50/100/200KB → 看压缩后大小是否靠近目标 |
| 裁剪 · 预设 | `/crop` → 缩放模式 → 点 Instagram / 电商主图 / 一寸等预设 |
| HEIC | `/heic` → 上传 `.heic`（需能访问 jsDelivr）→ 转 JPG/PNG 下载 |
| 旋转翻转 | `/rotate` → 90°/翻转 → 下载 |
| 清元数据 | `/exif` → 上传带 GPS 的 JPG → 下载后再看体积/定位信息 |
| 首页卡片 | `/` 搜索「HEIC」「旋转」「元数据」能筛到新工具 |
| 相关工具搜索 | 任意工具页底部「更多图片工具」有搜索框 |

## 4. P1 验收清单

| 项 | 怎么验 |
|---|---|
| 压缩对比 | `/compress` → 上传图 → 左右并排「原图 / 压缩后」 |
| AVIF | `/convert` → 选 AVIF → Chrome/Edge 新版本能导出；不支持时出提示 |
| 圆形裁剪 | `/crop` →「圆形」→ 拖选区 → 下载透明圆形 PNG |
| 批量改尺寸 | `/batch` →「改尺寸」→ 按百分比或像素 → 多图 ZIP |
| 批量水印 | `/batch` →「水印」→ 改文字/字号/透明度/颜色/平铺 → 多图 ZIP |
| AI 抠图 | `/cutout` → 上传人像/物体（需能访问 CDN）→ 去背景后下载 PNG |
| 首页 | `/` 搜索「抠图」「AVIF」「圆形」相关卡片能找到 |

## 5. P2 验收清单

| 项 | 怎么验 |
|---|---|
| PDF 转图片 | `/pdf2img` → 上传 PDF → 看分页预览 → 单页或 ZIP 下载 |
| 色板提取 | `/palette` → 上传图 → 看色块 → 点击复制 HEX；可点预览取色 |
| Favicon 包 | `/favicon` → 上传图标 → 下载多尺寸 ZIP / webmanifest |
| 条形码 | `/barcode` → 输入内容 → 选 CODE128/EAN 等 → 下载 PNG |
| GIF 拆帧 | `/gifsplit` → 上传 GIF → 看帧列表 → 单帧或 ZIP |
| 首页搜索 | `/` 搜索「PDF」「色板」「条形码」「GIF」「favicon」 |

## 6. P3 验收清单

**状态：已实现并本机通过**（2026-11-12）

| 项 | 怎么验 |
|---|---|
| 图片转文字 | `/ocr` → 上传含字图片 → 选中文/英文 → 识别 → 复制或下载 txt（首次需下载模型，要能访问 CDN） |
| SVG 优化 | `/svgopt` → 上传/粘贴 SVG → 看体积变化与预览 → 下载 |
| 首页搜索 | `/` 搜索「OCR」「文字」「SVG」 |

自动化（本机预览起来后）：

```powershell
$env:BASE_URL="http://127.0.0.1:8080"; npm run smoke:p3
```

说明：AI 超分等重模型本阶段不做。

## 7. 反馈 & 建议（本机验收）

| 项 | 怎么验 |
|---|---|
| 提交 | 任意页脚「反馈 & 建议」→ 填内容 → 发送 → 出现「已收到」 |
| 查看 | 打开终端打印的 `/inbox?token=…`，或 `/inbox` 输入口令 |
| 处理 | 收件箱可标已读 / 已处理 / 垃圾 / 删除；数据在 `data/feedback.jsonl` |

上线到纯静态 CDN 时，需把 `/api/feedback` 反代到同一套 Node 预览服务，或配置 `feedback-config.js` 的 `web3formsAccessKey` 做邮件备份。

## 8. 可选自动化冒烟

本机预览起来后：

```powershell
$env:BASE_URL="http://127.0.0.1:8080"; npm run smoke:live
```

通过再谈合并/上线。上线后仍以本机为准验收功能；线上若仍旧版，等边缘缓存过期或走你们的刷新缓存流程。

## 9. 长线（后续）

AI 超分 / 完整修图 / 默认上传云：明确不做或择机。  
详见画布计划：`canvases/imagec-competitive-roadmap.canvas.tsx`。

## 10. 分工提醒

- 改界面 / 改功能：本机 Cursor 闭环 + 上述预览验收  
- 目标 / 排期 / 上线转达：GrokBot  
- 合并到线上：仅在本地清单通过后
