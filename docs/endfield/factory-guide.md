---
title: "Endfield 集成工业（AIC）入门：从零搭建不劝退的自动化工厂"
description: "Arknights: Endfield 工厂系统新手教程：AIC 自动化工业核心、PAC 协议核心与电力链（中继器/供电桩）、自循环种植、电池/胶囊/炸药三条基础产线、哨站被动收入，以及避免断电死亡螺旋的实用技巧。"
---

# Endfield 集成工业（AIC）入门

很多 **Arknights: Endfield（终末地）** 玩家卡在前期，是因为没搞懂 **AIC（Automated Industrial Complex，集成工业系统）**——它占游戏一半内容，是角色养成材料、Stock Bills（地区货币）和抽卡券的源头。**工厂跑起来，离线也在给你产资源**；不建，就是把大量进度留在桌上。

这篇用「先懂概念、再照抄三条线」的方式，让新手不被工业玩法劝退。

> 数据基于 arknights.win / outputlag / 游侠网 / zoidblast 等社区共识整理，具体数值随版本可能微调。

## 一、核心概念：三句话搞懂 AIC

1. **闭环逻辑**：资源采集 → 加工合成 → 自动化生产 → 养成反馈。
2. **离线也跑**：生产线接好后会 24/7 自动产出，哪怕你人不在。
3. **电力是命**：所有机器必须通电，断电会整条停产——这是新手最大的坑。

## 二、电力系统：先通电，再谈产线

### 关键组件
| 组件 | 作用 |
|---|---|
| **PAC（协议锚点核心）** | 基地绝对中枢，黄色范围即供电区，所有设施须在范围内 |
| **中继器（Relay Tower）** | 远距离输电，从已供电源延伸，**两塔间距 ≤ 80 米** |
| **供电桩（Electric Pylon）** | 在局部范围无线供电，连到中继器即可 |
| **Thermal Bank（热库）** | 主发电机，吃 Originium 矿/电池发电；**尽早切电池更高效** |
| **蓝电池** | 用 Ferrium 替代 Amethyst，单位发电远高于绿电池（后期） |

### ⚠️ 避免「断电死亡螺旋」
如果基地彻底断电 → 粉碎/包装单元停 → 不产电池 → 热库停 → 全停。
**破解法**：永远留 1 个热库接 1 台专用 Originium 矿机作备份电源。

### 小技巧：反向搭建
可以从远处矿点「反向」往基地搭无电的中继器链，一旦接通电网整条自动上电——适合够远矿。

## 三、三条基础产线（照抄就能跑）

解锁条件：**打完第一章 Boss、账号等级 10–11、点开科技树**后立刻开搞，别等。

### 产线 1：自循环种植（Buckflower 种子回路）
- 1 台 **Seed Picking Unit** → 2 台 **Planting Unit**，把 1 朵花回路喂回 Seed Picking，剩余送 Protocol Stash。
- 这是后续胶囊/药品的素材底座，**最先建**。

### 产线 2：电池线（中期最重要）
- Amethyst 矿 → Refining Unit → Fitting Unit（产 amethyst parts）
- Originium 矿 → Shredding Unit（产 powder）
- 两者进 **Packaging Unit** → 电池
- 电池喂热库比 raw Originium 高效得多，是产能天花板的关键。

### 产线 3：胶囊 / 炸药线
- **Buck Capsule**：Amethyst 矿→Refining→Molding（bottle）+ Buckflower→Molding（powder）→ Filling Unit，用于 Valley IV 哨站换 Stock Bills。
- **Industrial Explosives**：Amethyst parts + Aketine powder → Packaging Unit，用来炸开挡路的红岩障碍。

## 四、科技树优先级

`电力` → `物流（全部）` → `Field Stash` → `Pylon Relaying` → `Depot Bus`

- **电力永远先升**，前期容量低，每加一台机器都要算功耗。
- 解锁传送带、总线系统后再谈扩展。

## 五、哨站：被动收入的隐藏金矿

哨站带子 PAC 和供应订单，**每分钟自动完成订单、奖励会议凭证**（换抽卡券、养成材料）。
- 把主基地产线连到哨站仓库，订单物资自动供应，零手动管理。
- 升级哨站提升订单品质；派驻有调度加成的干员（如安塔尔）增加奖励。
- 每日 4 次物资配送任务给地区调度券，用于扩产。

## 六、新手避坑 5 条

1. **发现矿点立刻占**：矿脉非无限，用手持矿机先采一批，尽快换电动矿机自动化。
2. **功能分区**：采矿区 / 加工区 / 合成区分开规划，别让传送带交叉缠绕（用 Belt Bridge 跨线）。
3. **用 Protocol Stash**：直接把物品倒进仓库，省掉长回程带，布局更紧凑。
4. **删了重建不罚**：布局烂就拆，游戏不惩罚删机器——效率来自试错。
5. **别沉迷工厂误主线**：新建筑/科技锁在主线后，平衡工厂与干员练度。

## 七、常见疑问

**Q：什么时候开始工厂？**
A：打完第一章 Boss、解锁科技树就开，越早被动收入越多。

**Q：产出卡住怎么办？**
A：多半某环节供不上——加第二台输入机（如第二台 Refining）对齐速率；或断电了。

**Q：蓝图能抄吗？**
A：能。AIC 模式按 F1 → Shared Blueprints 粘代码串即可导入整条产线（注意服务器锁定，跨服需手动照搭）。

---

**相关阅读**：[Endfield 货币系统图解](/endfield/currencies) · [Endfield 抽卡保底详解](/endfield/gacha-pity) · [Endfield Datalogger 解锁](/endfield/datalogger)
