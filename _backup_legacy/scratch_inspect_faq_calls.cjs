const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/PA9P1ZMWcjOiVejJmKq_Jc4NnxPKpDOgsS-L4kSTZPg.NZVYKLTE.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

// Find all F component calls that take JuLSoFdug and NLrWcdM50
const r = /e\(F,\{height:"100%",id:"([^"]+)",JuLSoFdug:"([^"]+)"[\s\S]*?NLrWcdM50:"([^"]+)"/g;
let m;
let count = 0;
while ((m = r.exec(txt)) !== null) {
  count++;
  console.log(`\n--- FAQ ${count} (id: ${m[1]}) ---`);
  console.log('Q:', m[3]);
  console.log('A:', m[2]);
}
