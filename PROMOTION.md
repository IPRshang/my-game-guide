# ggexplore.com 推广作战图

> 目标：在 0 广告预算（或少量时间成本）下，把 ggexplore.com 的自然搜索流量和社区流量拉起来。
> 更新时间：2026-08-25

---

## 一、当前流量瓶颈（军师诊断）

| 维度 | 状态 | 风险/机会 |
|------|------|-----------|
| 站内内容 | 163 页，三语（zh/en/es），覆盖 GTA6/Endfield/NTE/Ananta | 内容厚度已具备 |
| 技术 SEO | sitemap、robots、GSC/百度验证、结构化数据脚本齐全 | 底子 OK |
| 首页 title | 原“热门游戏攻略站” → 已优化为带核心关键词 | ✅ 已改 |
| 社交分享图 | 原图含“黑神话/艾尔登法环”等误导内容 → 已替换真实主题 OG 图 | ✅ 已换 |
| Google 收录 | `site:ggexplore.com` 几乎看不到自己的页面 | ❌ 最大瓶颈 |
| 站外外链 | 0 | ❌ 权重低 |
| 社媒存在 | Twitter 占位，Reddit/Discord/论坛零运营 | ❌ 直接流量低 |

**结论**：流量卡在“Google 没收录 + 站外零触达”。解决路径 = 站内 SEO 加固 + 主动提交搜索引擎 + 内容钩子社区分发 + 外链。

---

## 二、已完成的站内优化（本轮已 commit）

1. **config.js 三语首页 title/description 关键词化**
   - zh: `GTA6 / Endfield / NTE / Ananta 攻略站`
   - en: `GTA6, Endfield, NTE and Ananta Guides | ggexplore.com`
   - es: `Guías de GTA6, Endfield, NTE y Ananta | ggexplore.com`
2. **keywords 强化**：兑换码、节奏榜、抽卡模拟器、基地规划器、泄露、发售时间、地图等。
3. **OG/Twitter 图替换**：指向 `/images/og-image-v3.png`，真实反映四游戏主题。
4. **新增 `scripts/generate-og-image.py`**：以后换主题或加活动页可一键生成新 OG 图。
5. **更新 `.gitignore`**：排除本地构建产物和临时 OG 图。

---

## 三、搜索引擎提交与收录加速（主公 30 分钟内可完成）

### 3.1 Google Search Console（最重要）

站点已验证（meta tag 在 config.js 里）。接下来：

1. 打开 https://search.google.com/search-console
2. 选择资源 `ggexplore.com`
3. 左侧「站点地图」→ 提交 `https://ggexplore.com/sitemap.xml`
4. 等 1~7 天观察「覆盖范围」里的已收录/排除数量
5. **对核心页请求重新抓取**（索引 → URL 检查 → 输入 URL → 请求编入索引）：
   - `https://ggexplore.com/`
   - `https://ggexplore.com/gta6/`
   - `https://ggexplore.com/endfield/`
   - `https://ggexplore.com/nte/`
   - `https://ggexplore.com/ananta/`
   - `https://ggexplore.com/daily/`

### 3.2 Bing Webmaster Tools

1. 打开 https://www.bing.com/webmasters
2. 用 Google/微软账号登录并添加站点
3. 提交 sitemap：`https://ggexplore.com/sitemap.xml`
4. Bing 对独立站收录通常比 Google 更快，且会同步到 Yahoo/DuckDuckGo。

### 3.3 百度搜索资源平台

1. 打开 https://ziyuan.baidu.com/
2. 添加站点并验证（config.js 已有 `baidu-site-verification`）
3. 提交 sitemap 和链接。
4. 中文游戏攻略在百度有流量，但百度收录偏慢，需要持续更新。

### 3.4 Yandex（顺手做，俄语区也有玩家）

1. https://webmaster.yandex.com/
2. 添加站点、验证、提交 sitemap。

---

## 四、内容钩子与可分享资产（持续做）

高病毒传播潜力的页面，优先拿到社区分发：

| 页面 | 为什么值得分享 | 推荐渠道 |
|------|---------------|----------|
| `/gta6/leaks` | 近期 CyberLeek 泄露，Reddit 讨论度高 | r/GTA6, r/GamingLeaksAndRumours, GTA Forums |
| `/gta6/extended-look-guide` | 8/27 Gamescom 观看指南，时间敏感 | r/GTA6, X/Twitter |
| `/endfield/codes` | 兑换码 = 玩家刚需 | Discord, Reddit, Bilibili/贴吧 |
| `/nte/gacha` | 抽卡模拟器 = 互动工具，易转发 | Twitter/X, Reddit, 贴吧 |
| `/endfield/planner` | 基地规划器 = 独一份工具 | B 站/贴吧/Discord |
| `/daily/` | 每天一款新游，适合日更社媒 | Twitter/X, Reddit, 小红书/即刻 |

### 4.1 给 daily 页加个「分享」组件（建议）

在 `docs/daily/README.md` 底部加入一段固定 CTA：

```markdown
---

**觉得有用？** 分享给你的队友：
[X 转发](https://twitter.com/intent/tweet?text=今日游戏推荐：...) · [Reddit](...) · [复制链接](...)
```

### 4.2 长尾词继续补

基于真实搜索需求，再补 10~20 页：

- GTA6: `gta 6 radio stations`, `gta 6 wildlife`, `gta 6 police system`, `gta 6 fast travel`, `gta 6 property`
- Endfield: `endfield factory layout`, `endfield best team comp`, `endfield ascension guide`
- NTE: `nte controller support`, `nte best weapons`, `nte daily checklist`
- Ananta: `ananta beta signup`, `ananta factions`, `ananta co-op`

---

## 五、站外推广渠道与可直接发的文案

### 5.1 Reddit（海外最大游戏流量池）

**不要直接 spam 链接**，先参与讨论再发。建议账号：主账号 + 1~2 个小号轮换。

#### 可发帖/回帖的 subreddit

| 社区 | 适合内容 | 发帖形式 |
|------|---------|----------|
| r/GTA6 | leaks、watch guide、map | 情报帖/汇总帖 |
| r/GamingLeaksAndRumours | CyberLeek 汇总 | 链接帖 |
| r/Arknights | Endfield codes/planner | 工具帖 |
| r/arknightsendfield | Endfield 所有内容 | 攻略帖 |
| r/gachagaming | NTE codes/gacha | 资源帖 |
| r/AnantaGame | Ananta 全内容 | 攻略/预注册 |
| r/gamescom | 8/27 观看指南 | 讨论帖 |

#### 文案模板 A：GTA6 泄露汇总

```
I put together a curated summary of the recent GTA 6 CyberLeek stuff (map regions, 6-star wanted, Honor/Karma, fuel mechanics, combat, radio). Everything is labeled as unverified/dev-build and linked back to the DMCA context.

Wrote it in English/Chinese/Spanish so non-English speakers don’t have to rely on machine translation.

https://ggexplore.com/en/gta6/leaks

If anything looks wrong or I missed a source, let me know and I’ll update it.
```

#### 文案模板 B：8/27 观看指南

```
Gamescom Opening Night Live is on Aug 27, and there are strong hints of a new GTA 6 trailer. I made a one-page watch guide with time zones, where to stream, what to expect, and a checklist for the day after.

English: https://ggexplore.com/en/gta6/extended-look-guide
中文： https://ggexplore.com/gta6/extended-look-guide
```

#### 文案模板 C：兑换码/工具（Arknights Endfield / NTE）

```
Made a quick code tracker + beginner guide for [Endfield/NTE]. Will keep it updated as new codes drop.

https://ggexplore.com/en/endfield/codes

Also has an interactive base planner if you want to optimize production lines.
```

### 5.2 Discord（社区沉淀）

建议加入下列 Discord 服务器，在 `general/资源` 频道分享链接：

- Arknights Endfield Official / Fan
- Neverness to Everness Official / Fan
- Ananta Official / Anime GTA Community
- GTA 6 Leaks & Discussion

**分享时不要只丢链接**，加一句价值说明：

```
I built a multilingual guide hub for GTA6/Endfield/NTE/Ananta with codes, tier lists, maps, and a daily recommendation page. Might save you from hunting through 20 different wikis: https://ggexplore.com/en/
```

### 5.3 X / Twitter（短链+图）

**Twitter 账号 @GameStrategyHub 目前是占位**，建议主公注册/接管一个真实账号。每发一条推：

1. 配 OG 图（新图已支持 1200x630）
2. 带 1~2 个相关 hashtag：`#GTA6` `#ArknightsEndfield` `#NTE` `#Ananta`
3. 贴一个具体页面（不要总贴首页）

#### 推文模板

```
🚨 GTA 6: everything from the recent CyberLeak mapped, labeled as unverified, and compared to prior reports.

Map / wanted system / Honor / fuel / combat / radio — one page, EN/ZH/ES.

https://ggexplore.com/en/gta6/leaks

#GTA6 #GTA6Leaks #RockstarGames
```

### 5.4 中文社区（贴吧 / NGA / Bilibili / 小红书 / 即刻）

| 平台 | 适合内容 | 注意事项 |
|------|---------|----------|
| 贴吧（GTA6吧、终末地吧） | leaks、兑换码、观看指南 | 少发硬广，多回帖带链接 |
| NGA 手游/单机版块 | Endfield/NTE/Ananta 攻略 | 先发文字，链接放二楼 |
| B 站专栏/动态 | 图文攻略、视频脚本 | 视频简介放 ggexplore 链接 |
| 小红书 | Ananta/女性向/二次元 | 图文笔记，封面要吸睛 |
| 即刻 | daily 推荐 | 短内容+链接 |

#### 中文文案模板：GTA6 泄露汇总

```
最近 GTA6 的 CyberLeek 泄露挺多，我整理了一个汇总页：
• Leonida 地图分区（Vice-Dale/Kelly County 等）
• 6 星通缉与 Honor/Karma 系统
• 燃油、战斗、电台等机制

所有内容都标了「未官方确认」，并附上 DMCA 背景，方便大家自己判断真实性。
中文/英文/西语三语： https://ggexplore.com/gta6/leaks
```

### 5.5 游戏论坛与 Wiki 友链

**友链/外链是 SEO 权重核心**：

1. Fandom/GTA Wiki：在讨论页或用户页介绍 ggexplore 的 GTA6 database（不 spam）。
2. GameFAQs：发布短篇攻略，底部引用详细页。
3. Reddit wiki：部分 subreddit 允许在 wiki 放资源链接。
4. 联系小型游戏博主/YouTuber：提供他们可引用的资料页，换取反向链接。

### 5.6 视频/YouTube（中期）

如果主公或同事愿意做短视频：

- “GTA6 泄露 5 分钟速览” → 简介放链接
- “Endfield 基地规划器演示” → 工具引流
- “NTE 抽卡模拟器：你多少抽能出货？”

---

## 六、效果衡量与迭代节奏

### 6.1 必看指标

- **Google Search Console**：展示次数、点击次数、平均排名、收录页数
- **百度统计**：来源渠道、跳出率、停留时间
- **GitHub Pages insights**：访问量（有限但免费）

### 6.2 推荐节奏

| 频率 | 动作 |
|------|------|
| 每天 | 更新 `/daily/` + 发 1~2 条社媒 |
| 每周 | 补 2~3 个长尾词页面；在 2 个社区回帖/发帖 |
| 每月 | 检查 GSC/Bing 收录；分析高展示低点击页面，改 title/description |

### 6.3 30 天目标（建议）

- GSC 收录页数 ≥ 50
- 日均点击 ≥ 10（从 0 起步）
- 至少获得 3 个外部反向链接

---

## 七、下一步行动清单（按优先级）

1. ✅ 站内：首页 title/description/关键词/OG 图（已完成，待部署）
2. 🔄 部署：推送 commit 后等待 GitHub Actions 部署
3. ⏳ 提交：GSC / Bing / 百度 / Yandex sitemap
4. ⏳ 请求索引：首页 + 4 游戏专区 + daily + leaks/extended-look-guide
5. ⏳ 注册/接管 Twitter/X 账号，发第一条推文
6. ⏳ 在 r/GTA6 发 GTA6 leaks/extended-look-guide 帖
7. ⏳ 在 r/arknightsendfield 发 Endfield codes/planner 帖
8. ⏳ 在 r/AnantaGame 发汇总导航帖
9. ⏳ 加“分享按钮”到 daily 页和高价值工具页
10. ⏳ 继续补 10~20 个长尾词页面

---

## 八、风险提醒

- **Reddit/X 账号**：新号直接发链接容易被判 spam，建议先混 1~2 天再发。
- **泄露内容**：始终标注“未官方确认 / unverified / no confirmado”，避免被 DMCA 或社区反噬。
- **友链**：不要买低质外链，容易被 Google 惩罚。
- **多语言**：社媒发帖时尽量带对应语言页，提升转化率。
