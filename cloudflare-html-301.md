# Cloudflare 301：消除 `*.html` 重复 URL（P1）

## 背景
VuePress 1.x 为每个页面生成物理文件 `xxx.html`（如 `release-date.html`）。GitHub Pages 同时能把
`/en/gta6/release-date` 解析到这个文件，于是**同一个内容有两个可访问 URL**：

- `https://ggexplore.com/en/gta6/release-date.html`
- `https://ggexplore.com/en/gta6/release-date`  ← canonical 指向这里

两者都返回 200，Google 可能当作重复内容互抢权重。

站内链接、canonical、sitemap 已经全部是 clean URL（无 `.html`），由构建后脚本
`scripts/fix-internal-links.js` 与 `scripts/fix-canonical.js` 保证。剩下的就是把
「直接访问 `.html`」的请求 301 到 clean 形式，归属到 canonical。

## 修复：Cloudflare 边缘 301（部署层，零代码改动、零回归）

站点已在 Cloudflare 代理（橙色云）。在 Cloudflare 控制台给 `ggexplore.com` 加一条
**Single Redirect（重定向规则）**即可，无需改仓库、无需重构建。

### 方式 A：控制台 UI（Dashboard）
1. 进入 **Rules → Redirect Rules**（或 **单一重定向 Single Redirect**）。
2. 新建规则：
   - **Rule name**：`Strip .html extension`
   - **When incoming requests match**：`Custom filter expression`
     - 字段 `URI Path`，运算符 `ends with`，值 `.html`
     - （可选加 `AND`：`Hostname` `equals` `ggexplore.com` 限定主域）
   - **Then**：`Dynamic` 重定向
     - **Expression**：
       ```
       concat("https://ggexplore.com", regex_replace(http.request.uri.path, "\\.html$", ""))
       ```
     - **Status code**：`301`
   - **Preserve query string**：开启
3. 保存并部署。把这条规则排在其他规则**之前**。

### 方式 B：直接粘贴的表达式（更稳）
- 匹配表达式（Static/Expression）：
  ```
  ends_with(http_request_uri_path, ".html")
  ```
- 目标 URL（Dynamic）：
  ```
  https://ggexplore.com${1}
  ```
  其中 `${1}` 用正则捕获组 `(.*)\.html$` 提取去后缀后的路径。
  等效的单行表达式：
  ```
  concat("https://ggexplore.com", regex_replace(http.request.uri.path, "(.*)\\.html$", "${1}"))
  ```

### 验证
```bash
# 期望返回 301，Location 指向去 .html 的 clean URL
curl -sI https://ggexplore.com/en/gta6/release-date.html | grep -i location
# -> Location: https://ggexplore.com/en/gta6/release-date

curl -sI https://ggexplore.com/en/gta6/release-date | head -1
# -> HTTP/2 200
```

## 为什么不在仓库里做
- GitHub Pages 无法配置 301（无 `.htaccess` / 原生重定向）。
- 删除物理 `.html` 文件、改目录 `index.html` 会改变已验证可用的 no-trailing-slash URL 行为，
  有回归风险；Cloudflare 301 不动任何文件，最安全。
- 内链已全 clean，`.html` 仅被直接访问/旧书签命中，301 后即彻底收敛。
