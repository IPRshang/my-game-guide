// scripts/fix-faq-schema.js
// 构建后遍历 dist 所有 HTML，为含 FAQ 段落（中/英/西三语标题）的页面注入
// FAQPage JSON-LD，帮助 Google 产出 FAQ 富结果 / 精选摘要。
// 与 add-structured-data.js 注入的 Article 脚本互不冲突（各自独立 <script> 块）。
//
// 支持的 FAQ 段落格式（渲染后 HTML）：
//   1) <h2 id="faq">  +  <h3>问题</h3><p>答案</p>            （英文 ## FAQ 常见写法）
//   2) <h2 id="常见问题"> + <p><strong>Q：问题</strong>\nA：答案</p>  （中文 ## 常见问题）
//   3) <h2 id="preguntas-frecuentes"> + <p><strong>Q: 问题</strong>\nA: 答案</p> （西语）
// 标题 id 由 VuePress 根据 heading 文本自动生成（FAQ→faq，常见问题→常见问题，
// Preguntas frecuentes→preguntas-frecuentes），因此三语均可命中。

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const DIST = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(REPO_ROOT, 'docs', '.vuepress', 'dist');

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp, acc);
    else if (e.name.endsWith('.html')) acc.push(fp);
  }
  return acc;
}

function stripHtml(html) {
  return html
    .replace(/<a[^>]*class="header-anchor"[^>]*>#<\/a>/gi, '') // 去掉标题里的 # 锚点
    .replace(/<\/(p|li|tr|h3|h4|h5|h6|div|blockquote)>/gi, '\n') // 块级标签转换行
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '') // 去其余标签
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

// 截取 FAQ 段落内容（从 FAQ 标题到下一个 <h2 / <footer / </main>）
function extractFaqSection(html) {
  const h2m = html.match(
    /<h2[^>]*\bid="(faq|常见问题|preguntas-frecuentes)"[^>]*>/i
  );
  if (!h2m) return null;
  const sectionStart = h2m.index + h2m[0].length;
  let end = html.length;
  for (const c of ['<h2', '<footer', '</main>']) {
    const idx = html.indexOf(c, sectionStart);
    if (idx !== -1) end = Math.min(end, idx);
  }
  return html.slice(sectionStart, end);
}

function buildFaqLd(html) {
  const section = extractFaqSection(html);
  if (!section) return null;

  const qa = [];

  // 策略 A：<h3> 小节格式（英文 ## FAQ 常见写法）
  const parts = section.split(/<h3[^>]*>/i);
  for (let i = 1; i < parts.length; i++) {
    const block = parts[i];
    const close = block.indexOf('</h3>');
    if (close === -1) continue;
    const q = stripHtml(block.slice(0, close)).replace(/^#\s*/, '').trim();
    const a = stripHtml(block.slice(close + '</h3>'.length)).trim();
    if (q && a) qa.push({ q, a });
  }

  // 策略 B：<p><strong>Q[:：]问题</strong>\nA[:：]答案</p>（中/西语 ## 常见问题 写法）
  if (!qa.length) {
    const strongRe =
      /<p[^>]*>\s*<strong[^>]*>\s*Q[:：]\s*([\s\S]*?)<\/strong>\s*A[:：]?\s*([\s\S]*?)<\/p>/gi;
    let m;
    while ((m = strongRe.exec(section)) !== null) {
      const q = stripHtml(m[1]).trim();
      const a = stripHtml(m[2]).trim();
      if (q && a) qa.push({ q, a });
    }
  }

  if (!qa.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  };
}

function inject(htmlPath) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  if (html.includes('"@type":"FAQPage"')) return false; // 已注入则跳过
  if (htmlPath.endsWith('404.html')) return false;

  const ld = buildFaqLd(html);
  if (!ld) return false;

  const script = `<script type="application/ld+json">${JSON.stringify(ld)}</script>`;
  if (html.includes('</head>')) {
    html = html.replace('</head>', `${script}\n</head>`);
  } else if (html.includes('</body>')) {
    html = html.replace('</body>', `${script}\n</body>`);
  } else {
    html += script;
  }
  fs.writeFileSync(htmlPath, html);
  return true;
}

let count = 0;
for (const f of walk(DIST)) {
  try {
    if (inject(f)) count++;
  } catch (e) {
    console.error('ERR', f, e.message);
  }
}
console.log(`[fix-faq-schema] injected FAQPage JSON-LD into ${count} page(s).`);
