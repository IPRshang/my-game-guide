# ggexplore.com 内容 / SEO 体检报告（2026-10-23 修正版）

> 范围：本地 `docs/**/*.md` 全量扫描（无需联网、不改线上）
> 方法：正则解析 frontmatter（兼容单引号 / 双引号 / 无引号），正文按语言自适应计字数
> 关联改动：`docs/.vuepress/config.js`（西语 noindex 已解除、GA4 片段已就绪待填 ID）

---

## 一、总体结论（先看这里）

| 指标 | 数值 | 评估 |
|------|------|------|
| 扫描 .md 总数 | 373 | — |
| 含 frontmatter 页面 | 359（96.2%） | 良好 |
| 完全无 frontmatter 页面 | 14 | 需补 |
| 缺 `title` 页面 | 50（多数 H1 可兜底，非致命） | 建议补 |
| 缺 `description` 页面 | 23 | **影响点击率，优先补** |
| 重复 title（重复路由） | 4 组 / 8 页 | **已修复** |
| 疑似薄内容（初判） | 81 | 见第四节：绝大多数是阈值误伤 |
| 近空白正文 | 0 | 无真空页 |

**一句话结论**：站点内容整体扎实，**不存在大面积薄内容问题**。真正值得动手的只有三件事——
1. 已修复的「重复路由」结构性 bug（about / privacy 的 `.md` 与 `index.md` 并存，Google 视为重复内容）；
2. 23 个页面的 meta description 缺失（直接拉低搜索结果点击率）；
3. 14 个页面完全无 frontmatter（其中部分还是重点攻略页，缺 title+description 双重控制）。

---

## 二、本次已修复（结构性 bug）

### 2.1 重复路由（重复 URL / 重复内容）✅ 已解决

VuePress 中 `about.md` 会生成 `/about.html`，`about/index.md` 会生成 `/about/`——两者正文完全相同会让 Google 拿到两个竞争 URL、互相稀释权重。

| 删除的冗余文件 | 保留的 canonical（clean URL） | 说明 |
|----------------|------------------------------|------|
| `docs/about.md` | `docs/about/index.md` → `/about/` | 字节完全相同 |
| `docs/en/about.md` | `docs/en/about/index.md` → `/en/about/` | 字节完全相同 |
| `docs/privacy.md` | `docs/privacy/index.md` → `/privacy/` | 字节完全相同 |
| `docs/en/privacy.md` | `docs/en/privacy/index.md` → `/en/privacy/` | **两版本文字有差异，已合并** |

`en/privacy.md` 与 `en/privacy/index.md` 仅在第 34 行差一句：旧 `.md` 写明「JD.com affiliate links」，旧 `index.md` 只写泛泛的「partner retailers」。站点确实投放京东联盟链接，**具体披露更准确合规**，已把 JD.com 表述并入 `index.md`，再删除 `.md`，一举解决重复路由 + 提升披露准确性。

> 删除均为 `git rm`（已暂存），未提交，您可在 `git status` 复核后决定是否 commit。

---

## 三、待办清单（按优先级）

### P1 — meta description 缺失（23 页）【最高 ROI，建议优先批量补】

缺少 `description` 时 Google 会自由抓取正文生成摘要，往往不命中用户搜索意图，**直接拉低 CTR**。建议每页补 120–160 字、含目标关键词、不堆砌的唯一描述。

| # | 文件（现已统一为 index 版） | 备注 |
|---|------------------------------|------|
| 1 | `404.md` | 错误页，可忽略或写通用语 |
| 2 | `README.md` | 首页，建议写站点级描述 |
| 3 | `about/index.md` | 关于页 |
| 4 | `cyberpunk/README.md` | 赛博朋克栏目首页 |
| 5 | `cyberpunk/phantom-liberty.md` | DLC 攻略（正文 2.4KB，有料） |
| 6 | `elden-ring/README.md` | 法环栏目首页 |
| 7 | `elden-ring/dlc-guide.md` | DLC 开荒（正文 3KB，有料） |
| 8 | `en/README.md` | 英文首页 |
| 9 | `en/about/index.md` | 英文关于页 |
| 10 | `en/cyberpunk/README.md` | 英文赛博朋克首页 |
| 11 | `en/gta6/database.md` | 英文资料库（9.7KB 表格，有料） |
| 12 | `en/privacy/index.md` | 英文隐私页（已合并） |
| 13 | `gta6/database.md` | 资料库（9.7KB，有料） |
| 14 | `gta6/early-guide.md` | 前期攻略 |
| 15 | `privacy/index.md` | 隐私页 |
| 16 | `wukong/README.md` | 悟空栏目首页 |
| 17 | `wukong/combat-guide.md` | 战斗精通（3KB，有料） |
| 18 | `zelda/README.md` | 王国之泪栏目首页 |
| 19 | `zelda/depths-guide.md` | 地底探索（3KB，有料） |

> 注：`about/index.md`、`en/about/index.md`、`privacy/index.md`、`en/privacy/index.md` 已随 2.1 调整为唯一 canonical 文件，描述补在这几个 index 上即可。

### P1 — 完全无 frontmatter（14 页）【建议整段补 title+description】

这 14 页直接以 `# 标题` 开头，无 frontmatter → 既无 `<title>` 显式控制，也无 meta description。其中多数为重点攻略/栏目页，优先级高于上面的「有 frontmatter 但缺 description」。

| 文件 | 正文体量 | 备注 |
|------|----------|------|
| `README.md` | 首页 | 站点级 |
| `cyberpunk/README.md` | 栏目首页 | |
| `cyberpunk/phantom-liberty.md` | ~2.4KB | DLC 攻略 |
| `elden-ring/README.md` | 栏目首页 | |
| `elden-ring/dlc-guide.md` | ~3KB | DLC 开荒 |
| `en/README.md` | 英文首页 | |
| `en/cyberpunk/README.md` | 英文栏目首页 | |
| `en/gta6/database.md` | ~9.7KB | 英文资料库 |
| `gta6/database.md` | ~9.7KB | 资料库 |
| `gta6/early-guide.md` | 前期攻略 | |
| `wukong/README.md` | 栏目首页 | |
| `wukong/combat-guide.md` | ~3KB | 战斗精通 |
| `zelda/README.md` | 栏目首页 | |
| `zelda/depths-guide.md` | ~3KB | 地底探索 |

### P2 — 有 frontmatter 但缺 `title`（其余 36 页）

VuePress 会以首个 `# H1` 作为 `<title>` 兜底，故**非致命**，但显式 title 能更好控制搜索结果标题与社交分享卡片。完整清单（节选自 50 个缺 title 中、扣除上面 14 个无 frontmatter 的剩余项）：

- **cyberpunk**：`achievements.md`、`builds.md`、`endings.md`、`romance.md`
- **elden-ring**：`beginner-guide.md`、`builds.md`、`legendary-weapons.md`
- **gta6**：`achievements.md`、`best-vehicles.md`、`cheats.md`、`database.md`、`early-guide.md`、`hidden-locations.md`、`money-guide.md`、`story-guide.md`、`weapons.md`
- **wukong**：`boss-guide.md`、`builds.md`、`collectibles.md`、`secrets.md`
- **zelda**：`cooking.md`、`hidden-locations.md`(如有)、`korok-seeds.md`、`shrines.md`、`weapons.md`
- **en/**：`gta6/cheats.md`、`gta6/database.md`、`gta6/hidden-locations.md`、`gta6/weapons.md`、`wukong/builds.md`、`elden-ring/beginner-guide.md`、`cyberpunk/romance.md`
- **es/gta6**：`achievements.md`、`best-vehicles.md`、`cheats.md`、`database.md`、`hidden-locations.md`、`money-guide.md`、`story-guide.md`、`weapons.md`

（精确集合以扫描 JSON `missing_title` 为准；注意 `database.md`/`early-guide.md` 等同时出现在「无 frontmatter」组，已在上表覆盖。）

---

## 四、薄内容重新评估（避免误判）

初判 81 页「薄」是因为阈值设得过严（中文 <500 字、英文 <300 词即标红）。复核后分类如下：

**A. 工具型页面（内容即交互组件，非文字薄）**——SEO 上不必当作薄内容，但要补一段引导文字 + meta：
- `nte/gacha.md`（140 字）、`endfield/planner.md`（141 字）、`en/nte/gacha.md`、`es/nte/README.md` 等交互计算器/模拟器页。

**B. 落地/栏目/关于页（天然短，正常）**：`about`、`README`、各 `privacy` 等，长度本就该短，无需扩写。

**C. 真·偏薄、建议补充的短攻略（约 13 页，当量 <300）**：
- `gta6/money-guide.md`、`nte/tier-list.md`、`endfield/tier-list.md`、`elden-ring/co-op.md`、`nte/beginner.md`、`nte/codes.md`、`endfield/beginner.md`、`gta6/best-vehicles.md`、`elden-ring/summary.md`、`ananta/pre-registration.md`、`elden-ring/builds.md`、`elden-ring/malenia.md`、`cyberpunk/builds.md`

> 这些多为 300–450 中文字的聚焦问答页（如「兑换码在哪领」「女武神怎么打」），本身可用；若想冲更高排名，每页再扩 200–400 字（背景、注意事项、版本差异）即可脱离薄内容区间。

**D. 中等长度、达标页（占多数）**：`gta6/release-date.md`(418)、`endfield/system-requirements.md`(445)、`wukong/gourds.md`(430)、英文 200+ 词页等——**均属正常内容，不薄**。

---

## 五、下一步建议（按 ROI 排序）

1. **批量补 23 个 description**（P1，最高 ROI，直接提升 CTR）。
2. **给 14 个无 frontmatter 页补整段 frontmatter**（P1，顺带解决 title+description 双缺）。
3. **给 36 个缺 title 页补 title 字段**（P2，H1 已兜底，可后续分批）。
4. **扩写 C 类约 13 个偏薄短攻略**（P2，提升排名天花板）。
5. **GA4 激活**：待您能打开 GA 后台拿到 `G-XXXXXXXXX`，把 `config.js` 第 62–69 行注释解除、替换 ID 即可（已就绪）。
6. **监控收录**：GSC 验证 meta 已部署（`bPUpcxFWlq1QuUGCtsb-fSoUcwQGm8T2YUjU_6PUZM4`），配合 GA4 后即可用真实数据评估中/英/西流量，再做二选一决策。

---

## 六、本次改动文件清单（待您 commit）

- `docs/.vuepress/config.js`：西语 noindex 解除 + GA4 片段就绪（上一轮已改）
- `docs/about.md`：**删除**（→ `about/index.md`）
- `docs/en/about.md`：**删除**（→ `en/about/index.md`）
- `docs/privacy.md`：**删除**（→ `privacy/index.md`）
- `docs/en/privacy.md`：**删除**（→ `en/privacy/index.md`，并已把 JD.com 披露并入 index）
- `docs/en/privacy/index.md`：合并披露文案

> 全部为本地改动、git 已追踪可还原；关键提交（commit/push）按惯例由您手动完成。
