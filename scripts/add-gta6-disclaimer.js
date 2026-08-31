#!/usr/bin/env node
/**
 * Pre-release EEAT guard for GTA6 guide pages.
 *
 * Injects a prominent, SEO-friendly disclaimer right after the H1 of every
 * GTA6 (and /en/gta6) guide page, marking the content as pre-launch /
 * based on leaks & official trailers, with the real launch date and a
 * promise to verify within 48h of release. This lowers the risk of Google
 * treating pre-launch "exact numbers" as low-quality / misleading content.
 *
 * Idempotent: skips any file that already carries the MARKER comment.
 * Excludes README.md (hub/index pages).
 *
 * Run any time (local or in CI, before/after build). Safe to re-run.
 *   node scripts/add-gta6-disclaimer.js
 */

const fs = require('fs');
const path = require('path');

const DOCS = path.resolve(__dirname, '..', 'docs');
const MARKER = 'GTA6_PRERELEASE_NOTE';

const ZH = `::: warning ⚠️ 发售前内容提示
<!-- ${MARKER} -->
本攻略基于 GTA6 泄露片段、官方预告及发售前公开数据整理。**游戏将于 2026 年 11 月 19 日正式发售**，文中具体收益、机制、地点等均以发售后实测为准，发售 48 小时内我们会逐一核验并更新。
:::`;

const EN = `::: warning ⚠️ Pre-release content notice
<!-- ${MARKER} -->
This guide is based on leaked footage, official trailers, and pre-launch public data. **GTA 6 launches November 19, 2026** — exact payouts, mechanics, and locations above are subject to change and will be verified against real gameplay within 48 hours of release.
:::`;

function inject(absPath, block) {
  const txt = fs.readFileSync(absPath, 'utf8');
  if (txt.includes(MARKER)) return false; // idempotent — already injected
  const lines = txt.split('\n');
  const h1 = lines.findIndex((l) => /^#\s/.test(l));
  if (h1 === -1) return false; // no H1, skip to be safe
  const blockLines = block.split('\n');
  // blank line + block lines + blank line, so the ::: container has
  // surrounding blank lines and renders correctly in VuePress.
  lines.splice(h1 + 1, 0, '', ...blockLines, '');
  fs.writeFileSync(absPath, lines.join('\n'));
  return true;
}

let changed = 0;
const touched = [];
for (const lang of ['', 'en']) {
  const dir = path.join(DOCS, lang, 'gta6');
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.md') || f === 'README.md') continue;
    const abs = path.join(dir, f);
    if (inject(abs, lang === 'en' ? EN : ZH)) {
      changed++;
      touched.push(path.relative(DOCS, abs).replace(/\\/g, '/'));
    }
  }
}
console.log(`[gta6-disclaimer] injected pre-release notice into ${changed} page(s)`);
touched.forEach((t) => console.log('  + ' + t));
