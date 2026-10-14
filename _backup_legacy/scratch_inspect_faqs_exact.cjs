const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/PA9P1ZMWcjOiVejJmKq_Jc4NnxPKpDOgsS-L4kSTZPg.NZVYKLTE.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const r = /JuLSoFdug:"([^"]+)",layoutId:"([^"]+)",NLrWcdM50:"([^"]+)"/g;
let m;
while ((m = r.exec(txt)) !== null) {
  console.log(`Q: "${m[3]}"`);
  console.log(`A: "${m[1]}"`);
  console.log(`LayoutId: ${m[2]}\n`);
}
