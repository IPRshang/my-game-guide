// scripts/add-structured-data.js
// 构建后遍历 dist 所有 HTML，为每个页面注入 Article 类型 JSON-LD 结构化数据，
// 帮助 Google 产出富摘要（标题/描述/发布更新时间）。
// 日期来源：回源 markdown 的 git 历史（首次提交=datePublished，最后提交=dateModified）；
// 若无法取得则回退到构建时间。复用 docs:build 中已 git fetch --unshallow 的全量历史。

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = path.resolve(__dirname, '..');
const DIST = path.join(REPO_ROOT, 'docs', '.vuepress', 'dist');
const SITE = 'https://ggexplore.com';

// 同 fix-canonical.js：把 dist 相对 html 路径映射成 clean URL 路径，
// 让 mainEntityOfPage.@id 与 canonical 完全一致（去掉 .html，
// index.html -> / 或 /xxx/），避免两者后缀不一致。
function relToUrlPath(rel) {
  let p = rel.replace(/\\/g, '/');
  if (p === 'index.html') return '/';
  if (p.endsWith('/index.html')) {
    return '/' + p.slice(0, -'index.html'.length);
  }
  if (p.endsWith('.html')) {
    p = p.slice(0, -'.html'.length);
  }
  return '/' + p;
}

// 把 dist 下的 html 相对路径映射回可能的源 markdown 文件
function htmlToMarkdownCandidates(relHtml) {
  let p = relHtml.replace(/\.html$/, '');
  if (p === 'index') return ['docs/README.md'];
  if (p.endsWith('/index')) p = p.slice(0, -('/index').length) || 'index';
  const base = 'docs/' + p; // e.g. docs/gta6/release-guide 或 docs/en/gta6/release-guide
  return [base + '.md', base + '/README.md', base + '/index.md'];
}

function gitDate(file) {
  try {
    const first = execSync(`git log --follow --format=%cI --reverse -- ${file}`, {
      cwd: REPO_ROOT, encoding: 'utf8'
    }).trim().split('\n')[0];
    const last = execSync(`git log -1 --format=%cI -- ${file}`, {
      cwd: REPO_ROOT, encoding: 'utf8'
    }).trim();
    return { first: first || null, last: last || null };
  } catch (e) {
    return { first: null, last: null };
  }
}

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp, acc);
    else if (e.name.endsWith('.html')) acc.push(fp);
  }
  return acc;
}

function inject(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  if (html.includes('application/ld+json')) return; // 已注入则跳过

  const rel = path.relative(DIST, htmlPath).replace(/\\/g, '/');

  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const desc = descMatch ? descMatch[1] : '';
  const url = SITE + relToUrlPath(rel);

  let dates = { first: null, last: null };
  for (const c of htmlToMarkdownCandidates(rel)) {
    const d = gitDate(c);
    if (d.first || d.last) { dates = d; break; }
  }
  const now = new Date().toISOString();
  const published = dates.first || dates.last || now;
  const modified = dates.last || dates.first || now;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: desc,
    image: SITE + '/og-image.png',
    datePublished: published,
    dateModified: modified,
    author: { '@type': 'Organization', name: 'GGExplore' },
    publisher: {
      '@type': 'Organization',
      name: 'GGExplore',
      logo: { '@type': 'ImageObject', url: SITE + '/og-image.png' }
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }
  };

  const script = `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n`;
  const newHtml = html.replace(/<\/head>/i, (m) => script + m);
  if (newHtml !== html) {
    fs.writeFileSync(htmlPath, newHtml);
    console.log(`Schema injected: ${rel} (published=${published.slice(0, 10)})`);
  }
}

if (!fs.existsSync(DIST)) {
  console.error('dist not found at', DIST);
  process.exit(1);
}
const files = walk(DIST);
files.forEach(inject);
console.log(`Done. ${files.length} html files processed for structured data.`);
