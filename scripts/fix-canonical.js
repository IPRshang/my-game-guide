#!/usr/bin/env node
/**
 * Post-build: inject per-page canonical, og:url, og:locale into every HTML
 * file in docs/.vuepress/dist.
 *
 * Policy (decided 2026-10-14): /en/ is the CANONICAL tree. Chinese (root)
 * pages and Spanish (/es/) pages are language alternates only:
 *   - a Chinese or Spanish page maps to its /en/ counterpart as canonical
 *     (when one exists);
 *   - a page with no /en/ counterpart (e.g. a few zh-only articles) is its
 *     own canonical.
 * This tells Google to index only /en/ and stops splitting ranking signals
 * across the three language trees (fixes "Duplicate without user-selected
 * canonical"). hreflang alternates are injected by fix-hreflang.js.
 *
 * Run AFTER `vuepress build`, BEFORE deploy (chained in package.json docs:build).
 */

const fs = require('fs');
const path = require('path');

const DIST = path.resolve(__dirname, '..', 'docs', '.vuepress', 'dist');
const SITE = 'https://ggexplore.com';

if (!fs.existsSync(DIST)) {
  console.error('[canonical] dist not found:', DIST);
  process.exit(1);
}

// --- helpers ---

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
    // gta6/index.html -> /gta6/
    return '/' + p.slice(0, -'index.html'.length);
  }
  // gta6/release-guide.html -> /gta6/release-guide  (strip .html)
  if (p.endsWith('.html')) {
    p = p.slice(0, -'.html'.length);
  }
  return '/' + p;
}

// site URL path -> { key, lang }
//   /                      -> { key: '',       lang: 'zh' }
//   /gta6/price            -> { key: 'gta6/price', lang: 'zh' }
//   /en/                   -> { key: '',       lang: 'en' }
//   /en/gta6/price         -> { key: 'gta6/price', lang: 'en' }
//   /es/gta6/price         -> { key: 'gta6/price', lang: 'es' }
function parseUrl(urlPath) {
  let p = urlPath.replace(/^\/+/, '');
  let lang = 'zh';
  if (p.startsWith('en/')) { lang = 'en'; p = p.slice(3); }
  else if (p.startsWith('es/')) { lang = 'es'; p = p.slice(3); }
  p = p.replace(/\/+$/, '');
  return { key: p, lang };
}

// --- pre-scan: contentKey -> { zh, en, es } url paths ---
const files = walk(DIST);
const byKey = new Map();
for (const fp of files) {
  const rel = path.relative(DIST, fp).replace(/\\/g, '/');
  if (rel === '404.html') continue;
  const urlPath = relToUrlPath(rel);
  const { key, lang } = parseUrl(urlPath);
  if (!byKey.has(key)) byKey.set(key, {});
  byKey.get(key)[lang] = urlPath;
}

function processFile(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const rel = path.relative(DIST, htmlPath).replace(/\\/g, '/');
  if (rel === '404.html') return;

  const urlPath = relToUrlPath(rel);
  const { key, lang } = parseUrl(urlPath);
  const variants = byKey.get(key) || {};

  // Canonical target: the /en/ version if it exists, otherwise self.
  const canonicalPath = variants.en || urlPath;
  const canonical = SITE + canonicalPath;

  // og:locale follows the canonical page's language.
  const canonicalLang = variants.en ? 'en' : lang;
  const ogLocale =
    canonicalLang === 'en' ? 'en_US' : canonicalLang === 'es' ? 'es_ES' : 'zh_CN';

  let modified = html;
  const toInject = [];

  // 1. <link rel="canonical">
  const canonicalRegex = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;
  const canonicalTag = `<link rel="canonical" href="${canonical}">`;
  if (canonicalRegex.test(modified)) {
    modified = modified.replace(canonicalRegex, canonicalTag);
  } else {
    toInject.push(canonicalTag);
  }

  // 2. <meta property="og:url">
  const ogUrlRegex = /<meta\s+[^>]*property=["']og:url["'][^>]*>/i;
  const ogUrlTag = `<meta property="og:url" content="${canonical}">`;
  if (ogUrlRegex.test(modified)) {
    modified = modified.replace(ogUrlRegex, ogUrlTag);
  } else {
    toInject.push(ogUrlTag);
  }

  // 3. <meta property="og:locale">
  const ogLocaleRegex = /<meta\s+[^>]*property=["']og:locale["'][^>]*>/i;
  const ogLocaleTag = `<meta property="og:locale" content="${ogLocale}">`;
  if (ogLocaleRegex.test(modified)) {
    modified = modified.replace(ogLocaleRegex, ogLocaleTag);
  } else {
    toInject.push(ogLocaleTag);
  }

  // Inject all missing tags before </head>
  if (toInject.length > 0) {
    const injectStr = toInject.map((t) => '  ' + t).join('\n') + '\n';
    modified = modified.replace(/<\/head>/i, injectStr + '</head>');
  }

  if (modified !== html) {
    fs.writeFileSync(htmlPath, modified);
    const mode = toInject.length > 0 ? `injected ${toInject.length}` : 'replaced';
    console.log(`[canonical] ${rel} -> ${canonical} (og:${ogLocale}) [${mode}]`);
  }
}

// --- main ---
files.forEach(processFile);
console.log(`[canonical] Done. ${files.length} html files processed.`);
