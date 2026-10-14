#!/usr/bin/env node
/**
 * Post-build: keep ONLY canonical URLs in sitemap.xml.
 *
 * Canonical policy (decided 2026-10-14): /en/ is the canonical tree; Chinese
 * (root) and Spanish (/es/) pages are language alternates only. So:
 *   - KEEP  every /en/ URL                         (the canonical tree)
 *   - KEEP  root (zh) URLs that have NO /en/ counterpart (they are their own
 *            canonical, e.g. a few zh-only articles)
 *   - DROP  every /es/ URL                        (noindex + alternate only)
 *   - DROP  root (zh) URLs that DO have an /en/ counterpart (their canonical
 *            is the /en/ page, already in the sitemap)
 *
 * This stops the sitemap from submitting three near-duplicate trees to Google
 * and concentrates crawl budget on the /en/ canonical pages. fix-sitemap-
 * hreflang.js (run later in docs:build) adds xhtml:link alternates onto the
 * surviving /en/ URLs pointing at the zh/es versions.
 *
 * Run AFTER fix-sitemap-lastmod.js (so <loc> already uses extension-less form)
 * and BEFORE fix-sitemap-hreflang.js.
 *
 * Env overrides:
 *   SITEMAP_PATH  path to sitemap.xml (default docs/.vuepress/dist/sitemap.xml)
 *   DIST_DIR      path to built dist (default docs/.vuepress/dist)
 */

const fs = require('fs');
const path = require('path');

const SITEMAP = process.env.SITEMAP_PATH || 'docs/.vuepress/dist/sitemap.xml';
const DIST = process.env.DIST_DIR || 'docs/.vuepress/dist';

if (!fs.existsSync(SITEMAP)) {
  console.warn('[sitemap-canonical] sitemap not found, skip:', SITEMAP);
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

// Is this sitemap <loc> a canonical URL we want Google to index?
function isCanonical(locPath) {
  if (locPath.startsWith('/en/')) return true;        // canonical tree
  if (locPath.startsWith('/es/')) return false;       // noindex alternate
  // root (zh): canonical only when no /en/ counterpart exists
  const { key } = parseUrl(locPath);
  const variants = byKey.get(key) || {};
  return !variants.en;
}

// --- rewrite sitemap ---

let xml = fs.readFileSync(SITEMAP, 'utf-8');
const urlRe = /<url>([\s\S]*?)<\/url>/g;
let result = '';
let lastEnd = 0;
let kept = 0;
let dropped = 0;

let m;
while ((m = urlRe.exec(xml)) !== null) {
  const block = m[1];
  const locMatch = block.match(/<loc>([\s\S]*?)<\/loc>/);
  let keep = false;
  if (locMatch) {
    const locPath = locMatch[1].trim().replace(/^https?:\/\/[^/]+/, '');
    keep = isCanonical(locPath);
  }
  if (keep) {
    result += '<url>' + block + '</url>';
    kept++;
  } else {
    dropped++;
  }
  lastEnd = urlRe.lastIndex;
}
result += xml.slice(lastEnd);

fs.writeFileSync(SITEMAP, result);
console.log(`[sitemap-canonical] kept ${kept} canonical urls, dropped ${dropped}`);
