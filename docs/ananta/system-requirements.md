---
title: "Ananta 配置要求"
description: "Ananta PC 配置要求详解：最低与推荐配置、CPU/GPU/内存/存储，DLSS 4 与光追支持，以及笔记本能否流畅运行的优化建议。"
---

# Ananta PC 配置要求（最低 / 推荐）

以下数据基于 **2026 年 1 月国服 CBT1 封闭测试**，最终上线版本可能调整。

## 配置对照表

| 项目 | 最低配置 | 推荐配置 |
|------|----------|----------|
| 系统 | Windows 10 / 11 64 位 | Windows 10 / 11 64 位 |
| CPU | Intel i5-9400F 或 AMD Ryzen 7 3700X | Intel i7-12700K 或 AMD Ryzen 9 9900X |
| GPU | NVIDIA GTX 1060 6GB（或同级 AMD） | NVIDIA RTX 3080（8GB 显存） |
| 内存 | 16 GB | 32 GB |
| 存储 | SSD（CBT1 测试包约 46GB） | 60 GB SSD |

## 已确认图形特性

- **DLSS 4 多帧生成**：NVIDIA 官方确认支持
- **光线追踪反射**（Ray-Traced Reflections）：已确认
- **DualSense PS5 手柄**：PC 端支持

## 笔记本能玩 Ananta 吗？

CBT1 明确要求 **SSD 与独立显卡**。大致分层：

- **入门门槛**：GTX 1060 6GB 级别独显 + 16GB 内存，可在 1080p 低画质运行；
- **流畅体验**：RTX 3060 / 3070 级别可在中高画质稳定 60 帧；
- **高画质**：RTX 3080 及以上配合 DLSS 4 效果最佳。

## 优化建议

1. 务必使用 **SSD**——CBT1 明确要求，机械硬盘会卡加载；
2. 开启 **DLSS 4** 在帧数与画质间取得平衡；
3. 显存不足时优先降低「光线追踪反射」等级；
4. 关闭后台占用显存的浏览器 / 录制软件。

## 常见问题

**Q：Ananta 要多少存储空间？**
A：CBT1 测试包约 46GB，建议预留 60GB SSD 空间。

**Q：支持 AMD FSR 吗？**
A：目前官方只确认 DLSS 4（NVIDIA），FSR 未明确；AMD 显卡可在中低画质原生运行。

**Q：Mac 能玩吗？**
A：目前确认平台为 PC / PS5 / iOS / Android，Mac 未列入。

**Q：会登陆 Steam 吗？**
A：PC 走网易自研启动器，Steam / Epic 尚未官宣。

## 相关攻略

- [Ananta 全面介绍](./)
- [Ananta 预注册指南](./pre-registration)

<template><script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ananta 要多少存储空间？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CBT1 测试包约 46GB，建议预留 60GB SSD 空间。"
      }
    },
    {
      "@type": "Question",
      "name": "支持 AMD FSR 吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "目前官方只确认 DLSS 4（NVIDIA），FSR 未明确；AMD 显卡可在中低画质原生运行。"
      }
    },
    {
      "@type": "Question",
      "name": "Mac 能玩吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "目前确认平台为 PC / PS5 / iOS / Android，Mac 未列入。"
      }
    },
    {
      "@type": "Question",
      "name": "会登陆 Steam 吗？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PC 走网易自研启动器，Steam / Epic 尚未官宣。"
      }
    }
  ]
}
</script></template>
