const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
function walk(dir){let r=[];for(const f of fs.readdirSync(dir)){const p=path.join(dir,f);const s=fs.statSync(p);if(s.isDirectory())r=r.concat(walk(p));else if(f.endsWith('.md'))r.push(p);}return r;}
const files = walk(path.join(process.cwd(),'docs'));
let bad=0;
for(const f of files){
  const txt = fs.readFileSync(f,'utf8');
  const m = txt.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if(!m) continue;
  try { yaml.safeLoad(m[1]); }
  catch(e){ bad++; console.log('BAD:', f.replace(process.cwd()+'/','')); console.log('   ->', e.message.split('\n')[0]); }
}
console.log('\n扫描文件数:', files.length, '| 有YAML错误的文件:', bad);
