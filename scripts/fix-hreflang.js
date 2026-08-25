#!/usr/bin/env node
/**
 * Post-build: inject <link rel="alternate" hreflang="..."> tags into every
 * HTML page in docs/.vuepress/dist, so Google/Bing understand the
 * Chinese / English / Spanish pages are translations of each other and stop
 * splitting ranking signals across the three language trees.
 *
 * Strategy — "only link languages that REALLY exist":
 *   We scan the built dist/ for every .html file, derive each page's
 *   "content key" (strip the leading /en/ or /es/ prefix and trailing slash),
 *   and group pages by that key. For each page we emit <link alternate> tags
 *   for every language variant that actually exists in dist for that key,
 *   plus an x-default that points to the English variant if present,
 *   otherwise the Chinese (root) one.
 *
 *   Example content key "gta6/price":
 *     exists: /gta6/price (zh), /en/gta6/price (en), /es/gta6/price (es)
 *     -> emit hreflang=zh, en, es, x-default=en
 *   Example "gta6/achievements" (no Spanish page):
 *     exists: /gta6/achievements (zh), /en/gta6/achievements (en)
 *     -> emit hreflang=zh, en, x-default=en   (NO es link -> avoids 404)
 *   Example "/" (root only, no translations):
 *     -> emit only x-default=/ (self)
 *
 * Run AFTER `vuepress build`, chained in package.json docs:build (after
 * fix-canonical.js so the <head> is already normalized).
 */

const fs = require('fs');
const path = require('path');

const DIST = path.resolve(__dirname, '..', 'docs', '.vuepress', 'dist');
const SITE = 'https://ggexplore.com';

// --- discover all built pages and group by content key ---

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp, acc);
    else if (e.name.endsWith('.html')) acc.push(fp);
  }
  return acc;
}

// dist HTML path -> site URL path (extension-less canonical form)
function relToUrlPath(rel) {
  let p = rel.replace(/\\/g, '/');
  if (p === 'index.html') return '/';
  if (p.endsWith('/index.html')) {
    return '/' + p.slice(0, -'index.html'.length);
  }
  if (p.endsWith('.html')) p = p.slice(0, -'.html'.length);
  return '/' + p;
}

// site URL path -> { key, lang }
//   /                      -> { key: '',       lang: 'zh' }
//   /gta6/price            -> { key: 'gta6/price', lang: 'zh' }
//   /en/                   -> { key: '',       lang: 'en' }
//   /en/gta6/price         -> { key: 'gta6/price', lang: 'en' }
//   /es/gta6/price         -> { key: 'gta6/price', lang: 'es' }
//   /about                 -> { key: 'about',  lang: 'zh' }
function parseUrl(urlPath) {
  let p = urlPath.replace(/^\/+/, '');
  let lang = 'zh';
  if (p.startsWith('en/')) { lang = 'en'; p = p.slice(3); }
  else if (p.startsWith('es/')) { lang = 'es'; p = p.slice(3); }
  p = p.replace(/\/+$/, '');
  return { key: p, lang };
}

const files = walk(DIST);
const byKey = new Map(); // key -> { zh?, en?, es? }  (url paths)
const urlToKey = new Map(); // urlPath -> key (for quick lookup)

for (const fp of files) {
  const rel = path.relative(DIST, fp).replace(/\\/g, '/');
  if (rel === '404.html') continue;
  const urlPath = relToUrlPath(rel);
  const { key, lang } = parseUrl(urlPath);
  if (!byKey.has(key)) byKey.set(key, {});
  byKey.get(key)[lang] = urlPath;
  urlToKey.set(urlPath, key);
}

const LANG_TAG = { zh: 'zh-CN', en: 'en-US', es: 'es-ES' };

function buildAlternates(urlPath) {
  const key = urlToKey.get(urlPath);
  if (!key) return [];
  const variants = byKey.get(key) || {};
  const tags = [];
  for (const lang of ['zh', 'en', 'es']) {
    if (variants[lang]) {
      tags.push(`<link rel="alternate" hreflang="${LANG_TAG[lang]}" href="${SITE}${variants[lang]}">`);
    }
  }
  // x-default: prefer English, else Chinese (root), else whatever exists
  const xDefault = variants.en || variants.zh || variants.es;
  if (xDefault) {
    tags.push(`<link rel="alternate" hreflang="x-default" href="${SITE}${xDefault}">`);
  }
  return tags;
}

// --- inject into each HTML ---

function processFile(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const rel = path.relative(DIST, htmlPath).replace(/\\/g, '/');
  if (rel === '404.html') return;

  const urlPath = relToUrlPath(rel);
  const tags = buildAlternates(urlPath);
  if (tags.length === 0) return;

  let modified = html;

  // Remove any previously-injected hreflang links (idempotent re-runs)
  modified = modified.replace(/\s*<link\s+rel="alternate"[^>]*>/gi, '');

  const injectStr = tags.map((t) => '  ' + t).join('\n') + '\n';
  if (/<\/head>/i.test(modified)) {
    modified = modified.replace(/<\/head>/i, injectStr + '</head>');
  }

  if (modified !== html) {
    fs.writeFileSync(htmlPath, modified);
    console.log(`[hreflang] ${rel} -> ${tags.length} alternate tags`);
  }
}

if (!fs.existsSync(DIST)) {
  console.error('[hreflang] dist not found:', DIST);
  process.exit(1);
}

files.forEach(processFile);
console.log(`[hreflang] Done. ${files.length} html files processed.`);
