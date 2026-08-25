#!/usr/bin/env node
/**
 * Post-build: add <xhtml:link rel="alternate" hreflang="..."> entries to every
 * <url> in sitemap.xml, matching the page-level hreflang injected by
 * fix-hreflang.js. Both scripts derive the language set from the ACTUAL built
 * dist/ HTML files, so they never point to a 404.
 *
 * Must run AFTER fix-sitemap-lastmod.js (so <loc> already uses the
 * extension-less canonical form) and AFTER the dist is fully built.
 *
 * Env overrides:
 *   SITEMAP_PATH  path to sitemap.xml (default docs/.vuepress/dist/sitemap.xml)
 *   DIST_DIR      path to built dist (default docs/.vuepress/dist)
 *   SITE          site origin (default https://ggexplore.com)
 */

const fs = require('fs');
const path = require('path');

const SITEMAP = process.env.SITEMAP_PATH || 'docs/.vuepress/dist/sitemap.xml';
const DIST = process.env.DIST_DIR || 'docs/.vuepress/dist';
const SITE = process.env.SITE || 'https://ggexplore.com';

if (!fs.existsSync(SITEMAP)) {
  console.warn('[sitemap-hreflang] sitemap not found, skip:', SITEMAP);
  process.exit(0);
}

// --- build the same content-key -> languages map as fix-hreflang.js ---

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp, acc);
    else if (e.name.endsWith('.html')) acc.push(fp);
  }
  return acc;
}

function relToUrlPath(rel) {
  let p = rel.replace(/\\/g, '/');
  if (p === 'index.html') return '/';
  if (p.endsWith('/index.html')) return '/' + p.slice(0, -'index.html'.length);
  if (p.endsWith('.html')) p = p.slice(0, -'.html'.length);
  return '/' + p;
}

function parseUrl(urlPath) {
  let p = urlPath.replace(/^\/+/, '');
  let lang = 'zh';
  if (p.startsWith('en/')) { lang = 'en'; p = p.slice(3); }
  else if (p.startsWith('es/')) { lang = 'es'; p = p.slice(3); }
  p = p.replace(/\/+$/, '');
  return { key: p, lang };
}

const byKey = new Map();
for (const fp of walk(DIST)) {
  const rel = path.relative(DIST, fp).replace(/\\/g, '/');
  if (rel === '404.html') continue;
  const urlPath = relToUrlPath(rel);
  const { key, lang } = parseUrl(urlPath);
  if (!byKey.has(key)) byKey.set(key, {});
  byKey.get(key)[lang] = urlPath;
}

const LANG_TAG = { zh: 'zh-CN', en: 'en-US', es: 'es-ES' };

function alternatesFor(key) {
  const variants = byKey.get(key) || {};
  const out = [];
  for (const lang of ['zh', 'en', 'es']) {
    if (variants[lang]) {
      out.push(`    <xhtml:link rel="alternate" hreflang="${LANG_TAG[lang]}" href="${SITE}${variants[lang]}"/>`);
    }
  }
  const xDefault = variants.en || variants.zh || variants.es;
  if (xDefault) {
    out.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${xDefault}"/>`);
  }
  return out.join('\n');
}

// --- rewrite sitemap ---

let xml = fs.readFileSync(SITEMAP, 'utf-8');

// Ensure the xhtml namespace is declared on <urlset>
if (!/xmlns:xhtml=/.test(xml)) {
  xml = xml.replace(/<urlset\b/, '<urlset xmlns:xhtml="http://www.w3.org/1999/xhtml"');
}

const urlRe = /<url>([\s\S]*?)<\/url>/g;
let result = '';
let lastEnd = 0;
let count = 0;

let m;
while ((m = urlRe.exec(xml)) !== null) {
  result += xml.slice(lastEnd, m.index);
  let block = m[1];

  const locMatch = block.match(/<loc>([\s\S]*?)<\/loc>/);
  if (locMatch) {
    const loc = locMatch[1].trim();
    const locPath = loc.replace(/^https?:\/\/[^/]+/, '');
    const { key } = parseUrl(locPath);
    // strip any pre-existing hreflang links inside this <url> (idempotent)
    block = block.replace(/\s*<xhtml:link\s+[^>]*\/>/gi, '');
    const alt = alternatesFor(key);
    if (alt) {
      // block is the inner content (no </url> tag), so append before the
      // closing </url> that the assembly step below adds back.
      block = block + '\n' + alt + '\n  ';
      count++;
    }
  }

  result += '<url>' + block + '</url>';
  lastEnd = urlRe.lastIndex;
}
result += xml.slice(lastEnd);

fs.writeFileSync(SITEMAP, result);
console.log(`[sitemap-hreflang] added hreflang to ${count} <url> entries`);
