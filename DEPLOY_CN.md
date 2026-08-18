# ggexplore.com 国内外分流部署指南（方案 C）

目标：用 Cloudflare 全球 CDN 代理 GitHub Pages 源站，国内外统一加速（海外 Google/Ads 顺畅，国内比纯 Pages 稳，利于百度基础收录）。
Cloudflare 不强制 ICP 备案 → 本方案为 ggexplore.com 的**最终部署方案**（用户已决定不做备案）。

> 正式方案只需 GitHub Pages（现有 `push.py` 即可）；`deploy.py` 的 COS 同步仅用于下方「可选升级」的腾讯云路线。
> 配套模板：`.env.example`（仅腾讯云路线需要）

---

## ⚠️ 第 0 步（必看）：ICP 备案前置条件

国内任何 CDN/云加速服务 `.com` 域名，**基本都要求该域名已完成 ICP 备案**（工信部备案号，如「粤ICP备XXXXXXXX号」）。

- **查备案**：打开 https://beian.miit.gov.cn → 公共查询 → 备案信息查询 → 输入 `ggexplore.com`
- **若已备案**：继续下面步骤。
- **若未备案**：腾讯云 CDN 会拒绝接入该域名。此时两条路：
  1. **先备案**：在腾讯云买一台最便宜的境内 CVM（或轻量应用服务器），用它对 `ggexplore.com` 提交备案，约 1–2 周通过。备案≠必须长期用这台服务器，但备案期间/之后需有境内接入。
  2. **改用不强制备案的方案（降级）**：用 Cloudflare 免费版做全球 CDN（含海外优化好、国内一般）。但 Cloudflare 免费节点**对国内加速不稳定**，百度收录改善有限——只比纯 GitHub Pages 略好。

> 建议：若你本就面向国内 + 想百度收录，**备案是绕不过的**，早备早省心。先确认备案状态再继续。

---

## 正式方案：Cloudflare 免费版（最终选择，未备案也能做）

**本方案为 ggexplore.com 的最终部署方案**（用户已决定不做 ICP 备案）。Cloudflare 不强制备案，今天就能做；海外加速好、国内比纯 GitHub Pages 明显更稳，足够支撑 Google Ads 海外变现 + 百度基础收录。

原理：把域名 NS 托管到 Cloudflare，对 `ggexplore.com` 开启橙色云代理（Proxy）→ 全球 CDN + 自动 HTTPS。
- 海外加速好；国内一般，但远好于纯 GitHub Pages 的超时，对百度比纯 Pages 友好
- 文案/代码都不用改，不改 GitHub Pages 部署

### 步骤
1. 注册 https://dash.cloudflare.com → **Add a Site** → 输入 `ggexplore.com` → 选 Free 计划
2. Cloudflare 自动扫描 DNS 记录 → 确认已有指向 GitHub Pages 的记录（`CNAME` → `IPRshang.github.io`，或 `A` → GitHub Pages IP）。**保留它们**。
3. 去你的域名注册商（买 `ggexplore.com` 的地方），把 **NS 改成 Cloudflare 给的两条**（形如 `xxx.ns.cloudflare.com`）。生效需几分钟~24h。
4. Cloudflare → **SSL/TLS → Overview** → 加密模式选 **Full**（GitHub Pages 支持 HTTPS，不要选 Off；Full 即可，不必 strict）。
5. **DNS 编辑器**里，把 `ggexplore.com` 和 `www` 的记录**开启代理（橙色云 ☁️）**。
6. 可选：**SSL/TLS → Edge Certificates** 开启「Always Use HTTPS」强制跳转。

### 验证
```bash
curl -I https://ggexplore.com        # 应见 server: cloudflare，且 HTTPS 正常
# https://www.whatsmydns.net 看各地解析已变 Cloudflare IP
```

### 注意
- 免费版**国内节点有限**，百度收录改善不如备案后的腾讯云 CDN，但比纯 GitHub Pages 好。
- 若将来想进一步加强国内加速，可额外做下方「可选升级」的腾讯云 CDN（需先 ICP 备案）；不做也不影响当前站点运行。
- Cloudflare 代理只隐藏对外 IP，GitHub Pages 仍正常服务（Cloudflare 内部 CNAME 指向 `github.io`）。

---

## 可选升级：腾讯云 COS + CDN（备案后可做，国内加速更强）

1. 登录 https://console.cloud.tencent.com/cos → 存储桶列表 → **创建存储桶**
   - 名称：`ggexplore`（自动带 APPID 后缀，如 `ggexplore-1250000000`）
   - 地域：选离你近的，如 `ap-guangzhou`（记下**地域简称**，即 `COS_REGION`）
   - 访问权限：**公有读私有写**（静态站点只需公开读）
2. 进入桶 → **基础配置 → 静态网站** → 开启
   - 索引文档：`index.html`
   - 错误文档（可选）：`404.html`
3. 记下**存储桶名**（即 `COS_BUCKET`，形如 `ggexplore-1250000000`）

> 注意：桶所在地域必须和后面 CDN 选的加速区域一致；建议「中国境内」。

---

## 第 2 步：腾讯云 CDN 绑定 ggexplore.com + HTTPS

1. 打开 https://console.cloud.tencent.com/cdn → 域名管理 → **添加域名**
   - 加速域名：`ggexplore.com`
   - 加速区域：**中国境内**（海外仍走 GitHub Pages，不必在这里选全球）
   - 业务类型：静态加速
2. 源站配置：
   - 源站类型：**对象存储（COS）**
   - 选择第 1 步的桶（自动回源到 COS 静态网站）
   - 回源协议：HTTP（COS 静态网站用 HTTP 即可）
3. 提交后，CDN 会分配一个 **CNAME**（形如 `ggexplore.com.cdn.dnsv1.com`）→ 记下来，第 3 步要用。
4. **HTTPS**：域名管理 → 该域名 → HTTPS 配置 → **申请免费证书**（TrustAsia DV，几分钟下发）→ 开启「强制跳转 HTTPS」。
   - 证书下发后，访问 `https://ggexplore.com` 才安全，否则浏览器报不安全、Ads 也可能异常。

---

## 第 3 步：DNSPod 分线路解析（核心）

打开 https://console.dnspod.cn → 域名解析 → `ggexplore.com` → 添加记录（**两条**）：

| 主机记录 | 线路类型 | 记录类型 | 记录值 | 说明 |
|---------|---------|---------|--------|------|
| `@` | 境外 / 默认 | CNAME | `IPRshang.github.io` | 海外走 GitHub Pages（Google 抓取顺畅） |
| `@` | 国内 / 默认 | CNAME | `ggexplore.com.cdn.dnsv1.com`（第2步的 CDN CNAME） | 国内走腾讯云加速 |

> 顺序建议：先加「境外/默认 → GitHub」，再加「国内 → CDN」。DNSPod 国内线路命中即走 CDN，海外/未匹配走 GitHub。
> 注意 GitHub Pages 自定义域要求仓库里有 `CNAME` 文件内容为 `ggexplore.com`（你已有），否则 GitHub 不认这个 Host。

---

## 第 4 步：填密钥并部署

```bash
# 1. 装 SDK（只需一次）
pip install cos-python-sdk-v5

# 2. 复制模板并填真实值
copy .env.example .env
#   编辑 .env：TENCENT_SECRET_ID / TENCENT_SECRET_KEY / COS_REGION / COS_BUCKET

# 3. 一键双发
python deploy.py
```

`deploy.py` 会：① build → ② git push 到 GitHub（海外）、③ 同步 `dist` 到 COS（国内）。
首次建议加 `--purge` 清掉桶里旧文件：`python deploy.py --purge`

---

## 第 5 步：验证

```bash
# 国内线路（应命中腾讯云 CDN）：看响应头 Server/X-Cache
curl -I https://ggexplore.com
# 海外线路：用海外代理或 https://www.whatsmydns.net 看 @ 记录解析

# 内容一致性：国内/海外拿到的首页 HTML 应完全相同
curl -s https://ggexplore.com | head
```

- 国内 `curl` 命中 CDN 且 `X-Cache: HIT` 表示加速生效。
- 百度站长平台（能上外网时）提交 `https://ggexplore.com/sitemap.xml`。
- Google Search Console 同样提交该 sitemap（ggexplore.com 的 GSC property）。

---

## 常见问题

- **国内访问 502 / 超时**：确认 CDN 源站选的是 COS 桶（不是回源 GitHub）；确认桶已开静态网站且公有读。
- **CDN 添加域名被拒**：几乎都是**未备案**（见第 0 步）。
- **GitHub Pages 海外打不开 ggexplore.com**：检查仓库 `CNAME` 文件是否为 `ggexplore.com`，且 DNSPod 境外线路指向 `IPRshang.github.io`。
- **中文乱码**：`deploy.py` 已按扩展名设 `Content-Type`（html 用 `text/html; charset=utf-8`）；若仍乱码，检查 VuePress `config.js` 的 `charset` 设置。
- **证书不安全**：CDN 强制 HTTPS 后需等证书下发并开启「HTTP→HTTPS 跳转」。
