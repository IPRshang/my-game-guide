// scripts/fix-internal-links.js
// 构建后遍历 dist 所有 HTML，将内部链接中的 .html 后缀去掉，统一为 clean URL，
// 与 fix-canonical.js 生成的 clean canonical 对齐，避免「.html 变体」与 clean URL 互抢权重。
// 仅处理站内链接（相对路径或以本站域名开头的绝对路径），外部链接一律跳过。

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const DIST = path.join(REPO_ROOT, 'docs', '.vuepress', 'dist');
const SITE = 'https://ggexplore.com';

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp, acc);
    else if (e.name.endsWith('.html')) acc.push(fp);
  }
  return acc;
}

function fix(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const re = /(href\s*=\s*["'])([^"']+?\.html)(#[^"']*)?(["'])/gi;
  const replaced = html.replace(re, (m, open, href, hash, close) => {
    // 跳过明确外部（绝对 http/https 且非本站）
    if (/^https?:\/\//i.test(href) && !href.startsWith(SITE)) return m;
    // 内部链接：去掉 .html 后缀（保留可选 #fragment）
    const clean = href.replace(/\.html$/i, '');
    return open + clean + (hash || '') + close;
  });
  if (replaced !== html) {
    fs.writeFileSync(htmlPath, replaced);
    console.log('Internal links normalized: ' + path.relative(DIST, htmlPath));
  }
}

if (!fs.existsSync(DIST)) {
  console.error('dist not found at', DIST);
  process.exit(1);
}
walk(DIST).forEach(fix);
console.log('Done. internal .html links normalized to clean URLs.');
