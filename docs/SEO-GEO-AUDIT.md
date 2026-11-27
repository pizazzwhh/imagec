# imagec SEO 与 GEO 首批审计

检查日期为 2026 年 11 月 24 日。

## 线上基线

| 检查项 | 结果 |
|---|---|
| 首页、24 个工具、2 篇指南 | 原站点地图中的 27 个公开 URL 均返回 HTTP 200。 |
| 首页和压缩页的 `.html` 别名 | `/index.html` 和 `/compress.html` 均返回 HTTP 307，分别跳转到 `/` 和 `/compress`。 |
| 语言参数 | `/compress?lang=en` 返回 HTTP 200，原始 HTML 的 `<html lang>`、标题正文和 canonical 分别为 `zh-CN`、`在线图片压缩`、`/compress`。 |
| 抓取入口 | `/robots.txt` 和 `/sitemap.xml` 均返回 HTTP 200。模拟 `OAI-SearchBot` 的请求头时，首页、压缩页和 `/robots.txt` 均返回 HTTP 200。真实爬虫是否成功访问需结合 CDN 日志核对。 |
| Google 站点地图 | Search Console 中 `https://imagec.xin/sitemap.xml` 状态为成功，2026 年 11 月 19 日最后读取，发现 27 个网页。 |
| Google 网页索引 | 所有已知网页，2026 年 11 月 16 日更新。已收录 183 个、未收录 154 个。未收录原因包括重定向 103 个、已有适当规范标记的备用页 31 个、404 共 4 个、已发现未收录 11 个、已抓取未收录 5 个。 |
| Bing 站点地图 | `https://imagec.xin/sitemap.xml` 状态为成功，2026 年 11 月 21 日最后抓取，发现 27 个 URL。 |
| 百度站点权限 | 站点列表已有 `https://imagec.xin/`，普通收录页面可访问，提供 API 和手动提交入口。 |
| 搜索表现 | 试点页面的 Google 所选 canonical、曝光、点击与 Bing AI 引用仍需从站长平台读取。 |

## 首批上线验证

2026 年 11 月 24 日已发布到生产，ESA 版本为 `1795506330449216422`。四个中英文试点 URL 均返回 HTTP 200，原始 HTML 的语言、canonical 和双向 `hreflang` 核对通过。线上站点地图包含 29 个规范 URL。生产反馈凭据轮换后验证通过，测试反馈已收到，删除请求返回 HTTP 200。IndexNow 接收了本次更新的 10 个 URL，响应为 HTTP 200。

Google 和 Bing 继续使用此前已提交的同一站点地图地址。Google 的手动重提交未获平台确认，百度的 URL 提交仍待完成。

1. 对 `/`、`/en`、`/compress`、`/en/compress` 检查 HTTP 200、原始 HTML 语言、self-canonical 和双向 `hreflang`。站点地图应包含 29 个规范 URL。
2. 检查英文首页能直接打开英文压缩页。用 1200 × 800 测试图片走一次设置目标大小、预览、下载流程，再切回中文页。
3. 检查 `/whitebg`、`/cutout`、`/heic`、`/img2pdf` 和两篇指南的正文与链接。确认公开页面可以抓取，后台和 API 保持原有规则。
4. 使用站长平台提交或检查站点地图，查看四个试点页的索引状态和 Google 选择的 canonical。用 IndexNow 提交本次更新的页面。
5. 以上线日期为基准，在第 2 周和第 4 周记录工具页曝光、点击、Google 所选 canonical、Bing AI 引用和样本提问的引用 URL。

## GEO 抽查问题

- 如何把一张 PNG 压缩到 100 KB 以内？
- 怎样把签名图片的白底变成透明 PNG？
- 背景复杂的商品照片适合用哪种去背景方式？
- How can I convert an iPhone HEIC photo to JPG in my browser?
- How can I combine JPG and PNG images into one PDF without uploading them?
