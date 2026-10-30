// scripts/add-tool-schema.js
// 构建后遍历 dist，为交互工具页（Endfield 基地规划器 / NTE 抽卡模拟器，含中/英/西三语）
// 注入 SoftwareApplication JSON-LD，帮助 Google 产出「软件/应用」富媒体结果。
// 与 add-structured-data.js（Article）互不冲突：本脚本仅以自己的类型标记做幂等，
// 不依赖 application/ld+json 守卫，因此可在 Article 注入之后追加。
//
// 用法：node scripts/add-tool-schema.js [distDir]   （distDir 可选，便于本地单元测试）

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const DIST = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(REPO_ROOT, 'docs', '.vuepress', 'dist');
const SITE = 'https://ggexplore.com';

// 工具页 clean URL（无 .html、无尾部斜杠，已剥离语言前缀）→ 元信息
// applicationCategory 采用 schema.org 标准枚举，两款均为 Web 端实用工具。
const TOOLS = {
  '/endfield/planner': {
    name: 'Endfield Base Planner',
    nameZh: 'Endfield 基地规划器',
    nameEs: 'Planificador de Base Endfield',
    category: 'UtilitiesApplication'
  },
  '/nte/gacha-simulator': {
    name: 'NTE Gacha Simulator',
    nameZh: 'NTE 抽卡模拟器',
    nameEs: 'Simulador de Gacha NTE',
    category: 'UtilitiesApplication'
  }
};

// 与 add-structured-data.js / fix-canonical.js 同口径：dist 相对 html 路径 -> clean URL 路径
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

// 给定 clean URL，返回匹配的工具元信息（支持带尾部斜杠 / 子路径）
// 先剥离可选的语言前缀 /en、/es，使中/英/西三语同主题页共用同一 TOOLS 键。
function matchTool(urlPath) {
  const stripped = urlPath.replace(/^\/(en|es)(?=\/)/, '');
  for (const base of Object.keys(TOOLS)) {
    if (stripped === base || stripped === base + '/' || stripped.startsWith(base + '/')) {
      return TOOLS[base];
    }
  }
  return null;
}

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp, acc);
    else if (e.name.endsWith('.html')) acc.push(fp);
  }
  return acc;
}

function inject(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  if (html.includes('"@type":"SoftwareApplication"')) return false; // 已注入则跳过

  const rel = path.relative(DIST, htmlPath).replace(/\\/g, '/');
  const cleanPath = relToUrlPath(rel);
  const url = SITE + cleanPath;
  const tool = matchTool(cleanPath);
  if (!tool) return false;

  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  const desc = descMatch ? descMatch[1] : (title || tool.name);

  // 按页面语言选择名称：西语→nameEs，英语→name（英文），其余（中文）→nameZh
  const isEs = url.includes('/es/');
  const isEn = url.includes('/en/');
  let appName = tool.name;
  if (isEs && tool.nameEs) appName = tool.nameEs;
  else if (isEn) appName = tool.name;
  else if (tool.nameZh) appName = tool.nameZh;

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: appName,
    description: desc,
    applicationCategory: tool.category,
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    url: url
  };

  const script = `  <script type="application/ld+json">${JSON.stringify(ld)}</script>\n`;
  const newHtml = html.replace(/<\/head>/i, (m) => script + m);
  if (newHtml === html) return false;
  fs.writeFileSync(htmlPath, newHtml);
  console.log(`Tool schema injected: ${url}`);
  return true;
}

if (!fs.existsSync(DIST)) {
  console.error('dist not found at', DIST);
  process.exit(1);
}
let count = 0;
for (const f of walk(DIST)) {
  try {
    if (inject(f)) count++;
  } catch (e) {
    console.error('ERR', f, e.message);
  }
}
console.log(`[add-tool-schema] injected SoftwareApplication JSON-LD into ${count} page(s).`);
