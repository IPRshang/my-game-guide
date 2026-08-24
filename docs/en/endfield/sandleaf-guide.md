---
title: "Endfield Sandleaf Space Crisis: Dedicated Base & Logistics Layout"
description: "Arknights Endfield Sandleaf space-crisis fix: endgame recipes demand Sandleaf (unlocked after Act 1), reproducing it needs 3 large machines, crowding the base. Community fix: a dedicated Sandleaf base piped into other bases via logistics."
---

# Endfield Sandleaf Space Crisis: Dedicated Base & Logistics Layout

Once you reach the endgame of Arknights: Endfield, almost every player hits the same wall: **there is too much Sandleaf and not enough base space**. This plant resource becomes available at the end of Act 1, yet it feeds a huge share of high-value recipes, forcing everyone to cram three or four production lines into a limited main base until conveyor belts and depot exits leave no room to build. This guide explains where the crisis comes from and how the community-validated "dedicated base" fix actually works.

## 1. Why Sandleaf crowds your main base

Sandleaf only enters the obtainable list **after Act 1**, but its consumption stays high from that moment on: many endgame recipes treat it as a core ingredient rather than an occasional side material. The catch is that reproducing Sandleaf needs **3 large machines** running together — not a small device you can tuck in a corner, but a real footprint of production.

Because it is needed so often, players commonly build **3 to 4** Sandleaf facilities to keep supply safe. Three-plus sets, three large machines each, plus feeding, crafting, and belts, and your main base's usable area is gone almost instantly.

## 2. What the space crisis looks like

When the main base handles mining, crafting, batteries, capsules, and Sandleaf at once, the crisis shows up as three patterns:

1. **Tangled belts**: the Sandleaf line must feed several consumer points, so belts cross and knot inside the main base, leaving no clear ground for anything new.
2. **Depot Exit congestion**: finished goods must leave, depot exits are limited, and once Sandleaf takes a big share, other lines queue for an exit.
3. **Expand-to-demolish**: want a new recipe? Demolish a Sandleaf line first — then you don't have enough. A classic "capacity for space" death loop.

That is why simply "squeezing more machines" into the main base never works: area isn't created by crowding.

## 3. Community fix: a dedicated Sandleaf base

The community consensus is blunt — **devote an entire base purely to Sandleaf production**, then ship the finished Sandleaf to other bases through logistics. In other words, Sandleaf shouldn't mix with your main industry; it deserves its own "satellite factory."

Benefits:

- The main base frees up large area; mining, batteries, capsules, and explosives no longer fight Sandleaf for ground.
- The Sandleaf base can be minimal: "feed input → 3 large machines → output" in a straight line, with no need to accommodate other lines.
- Consumer bases only receive the finished product, keeping their logic clean and debugging fast.

## 4. Layout logic for the dedicated base (practical)

A workable dedicated Sandleaf base breaks into three steps:

1. **Cluster the 3 large machines**: place the three large machines needed to reproduce Sandleaf together, shortening feed distance and cutting internal belt length.
2. **Take only raw input, no side jobs**: this base only outputs Sandleaf. If upstream dependencies exist, keep them in the main base or another dedicated base — don't turn the Sandleaf base into a second main base.
3. **One-way finished output**: send Sandleaf straight out via a Depot Exit or Depot Bus; don't stockpile it here. Its job is to ship goods out, not store them.

## 5. Logistics: piping finished Sandleaf out

A dedicated base is only as good as its "pipe out" step. Two recommended methods:

- **Depot Exit direct link**: drop a Depot Exit in the Sandleaf base and run a belt to the main base's storage entrance for stable one-way logistics.
- **Bus sharing**: once Depot Bus is unlocked, hang the Sandleaf base on the bus and let consumer bases pull from it, skipping point-to-point belts.

Keep the Sandleaf base "output only (except raw input)" and the main base will never be back-fed by its belts. To tidy the main industry further, revisit the [Endfield Factory (AIC) Guide](/en/endfield/factory-guide).

## 6. FAQ

**Q: When does Sandleaf start choking the base?**
A: It unlocks after Act 1, but the crunch hits in endgame — many high-value recipes demand it at once, pushing you to build 3 to 4 sets.

**Q: Can I just cram it into the main base?**
A: Short term yes, but belts and depot exits keep crowding until you can't move. A dedicated base is the saner long-term fix.

**Q: How many machines does a dedicated base need?**
A: Reproducing Sandleaf itself needs 3 large machines; because demand is frequent, players often run 3 to 4 sets, so reserve space at that scale.

**Q: What's the most stable way to ship it out?**
A: Prefer a Depot Exit direct link or Depot Bus, keep output one-way, and avoid looping belts back into the main base.
