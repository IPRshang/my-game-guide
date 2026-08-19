#!/usr/bin/env node
/**
 * Post-build: inject per-page canonical, og:url, og:locale into every HTML
 * file in docs/.vuepress/dist.
 *
 * Why: VuePress 1.9.10's extendPageData plugin does NOT reliably render
 * frontmatter.head entries into the final HTML. The previous "dynamic-canonical"
 * plugin in config.js silently failed — canonical/og:url vanished from all
 * pages. This script rewrites the built HTML directly, which is 100% reliable.
 *
 * Run AFTER `vuepress build`, BEFORE deploy (chained in package.json docs:build).
 */

const fs = require('fs');
const path = require('path');

const DIST = path.resolve(__dirname, '..', 'docs', '.vuepress', 'dist');
const SITE = 'https://ggexplore.com';

// --- helpers ---

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp, acc);
    else if (e.name.endsWith('.html')) acc.push(fp);
  }
  return acc;
}

/**
 * Map a dist-relative HTML path to the site URL path.
 * GitHub Pages serves both /foo/bar and /foo/bar.html as the same file, so we
 * use the extension-less form as canonical to avoid duplicate-content splits.
 *   index.html                  -> /
 *   gta6/index.html             -> /gta6/
 *   gta6/release-guide.html     -> /gta6/release-guide
 *   en/index.html               -> /en/
 *   en/gta6/release-guide.html  -> /en/gta6/release-guide
 */
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

function processFile(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const rel = path.relative(DIST, htmlPath).replace(/\\/g, '/');

  // Skip 404 — no canonical needed
  if (rel === '404.html') return;

  const urlPath = relToUrlPath(rel);
  const canonical = SITE + urlPath;
  const ogLocale = rel.startsWith('en/') ? 'en_US' : 'zh_CN';

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
    console.log(`[canonical] ${rel} -> ${canonical} (${ogLocale}) [${mode}]`);
  }
}

// --- main ---

if (!fs.existsSync(DIST)) {
  console.error('[canonical] dist not found:', DIST);
  process.exit(1);
}

const files = walk(DIST);
files.forEach(processFile);
console.log(`[canonical] Done. ${files.length} html files processed.`);
