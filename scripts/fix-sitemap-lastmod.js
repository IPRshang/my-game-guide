#!/usr/bin/env node
/**
 * Rewrite sitemap.xml <lastmod> with the REAL last-change time of each page's
 * source markdown file (via git history), so Google gets accurate signals
 * instead of a uniform build timestamp.
 *
 * Run AFTER `vuepress build` and BEFORE deploying dist/.
 * Requires the repo to be checked out with full history (fetch-depth: 0)
 * so per-file `git log` returns different dates.
 *
 * Env overrides (mainly for local testing):
 *   SITEMAP_PATH  absolute or repo-relative path to sitemap.xml
 *   DOCS_DIR      repo-relative docs directory (default: "docs")
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SITEMAP = process.env.SITEMAP_PATH || 'docs/.vuepress/dist/sitemap.xml';
const DOCS = process.env.DOCS_DIR || 'docs';

if (!fs.existsSync(SITEMAP)) {
  console.warn('[sitemap-lastmod] not found, skip:', SITEMAP);
  process.exit(0);
}

// Map a sitemap <loc> path to candidate source markdown files.
//   /gta6/release-guide.html  -> docs/gta6/release-guide.md
//   /gta6/                    -> docs/gta6/README.md
//   /                        -> docs/README.md
function sourceCandidates(locPath) {
  const cands = [];
  if (locPath.endsWith('.html')) {
    const base = locPath.slice(0, -'.html'.length); // /gta6/release-guide
    cands.push(base + '.md');
    const dir = base.replace(/\/$/, '');
    cands.push(dir + '/README.md');
    cands.push(dir + '/index.md');
  } else {
    const dir = locPath.replace(/^\//, '').replace(/\/$/, '');
    cands.push((dir ? dir + '/' : '') + 'README.md');
    cands.push((dir ? dir + '/' : '') + 'index.md');
  }
  return cands.map((c) => path.join(DOCS, c));
}

function gitLastMod(file) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${file}"`, {
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim();
    if (!out) return null;
    // Normalize to UTC ISO (matches plugin's dateFormatter style).
    const d = new Date(out);
    return isNaN(d.getTime()) ? null : d.toISOString();
  } catch (e) {
    return null;
  }
}

let xml = fs.readFileSync(SITEMAP, 'utf-8');
const urlRe = /<url>([\s\S]*?)<\/url>/g;
let result = '';
let lastEnd = 0;
let matched = 0;
let updated = 0;

let m;
while ((m = urlRe.exec(xml)) !== null) {
  result += xml.slice(lastEnd, m.index);
  let block = m[1];

  const locMatch = block.match(/<loc>([\s\S]*?)<\/loc>/);
  if (locMatch) {
    const loc = locMatch[1].trim();
    const locPath = loc.replace(/^https?:\/\/[^/]+/, '');
    const cands = sourceCandidates(locPath);
    let date = null;
    for (const c of cands) {
      date = gitLastMod(c);
      if (date) break;
    }
    matched++;
    if (date) {
      if (/<lastmod>/.test(block)) {
        block = block.replace(
          /<lastmod>[\s\S]*?<\/lastmod>/,
          `<lastmod>${date}</lastmod>`
        );
      } else {
        block = block.replace(
          /(<loc>[\s\S]*?<\/loc>)/,
          `$1<lastmod>${date}</lastmod>`
        );
      }
      updated++;
    }
  }

  result += '<url>' + block + '</url>';
  lastEnd = urlRe.lastIndex;
}
result += xml.slice(lastEnd);

fs.writeFileSync(SITEMAP, result);
console.log(
  `[sitemap-lastmod] processed ${matched} urls, updated ${updated} with real git dates`
);
