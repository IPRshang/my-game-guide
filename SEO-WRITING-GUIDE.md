# SEO 写作规范（发布前自检清单）

本指南供所有内容贡献者在发布/更新攻略前自查，目标是**避免被 Google 判为低质重复（Crawled-not-indexed）**，并提升收录与富结果命中率。结构化数据（Article / Breadcrumb / FAQ / 工具页 SoftwareApplication）已由 `scripts/` 在构建时自动注入，**无需手动加 JSON-LD**。

## 发布前必过 6 项

1. **原创差异化 ≥ 30%**：禁止纯机翻/洗稿其他站点。每篇需包含本站独有内容（实测数据、原创配图、独家解读）。
2. **唯一标题 + 描述**：`<title>` 与 `description` 不与其他页面重复；中文/英文/西语同主题页用 hreflang 区分，内容各自独立。
3. **结构规范**：用 `##` 分段、`###` 小节；关键页补 `## FAQ / ## 常见问题 / ## Preguntas frecuentes` 段落（会自动注入 FAQPage 富结果）。
4. **内部链接**：新页至少链向 2 个相关站内页，旧游戏页链向新游页互传权重（构建时 `fix-internal-links.js` 会补强，但建议源文件也主动互联）。
5. **新游前瞻标注**：未发售游戏的内容在文首注明「基于官方信息与前瞻，发售前数据可能变动」，避免误导被判低质。
6. **非机翻校验**：三语版本各自通顺，不出现逐词翻译的生硬句式。

## 新增交互工具页时

- 在 `docs/<lang>/<game>/<tool>.md` 建页；工具页会被 `scripts/add-tool-schema.js` 自动识别并注入 `SoftwareApplication` 结构化数据。
- 如需新增工具，请在 `scripts/add-tool-schema.js` 的 `TOOLS` 表中登记其 clean URL 与中/西语名称。

## 本地验证结构

```bash
npm install
NODE_OPTIONS=--openssl-legacy-provider npm run docs:build
# 构建后检查 dist 工具页是否含 "SoftwareApplication"
grep -rl "SoftwareApplication" docs/.vuepress/dist | head
```

## 效果复盘

- 用 GSC 关注「网页索引」中 Crawled-not-indexed 是否下降、有效索引页是否上升。
- 用百度统计 + GSC 观察 9–10 月内容扩充后的曝光/点击趋势。
