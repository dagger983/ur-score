const fs = require('fs');

const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/PA9P1ZMWcjOiVejJmKq_Jc4NnxPKpDOgsS-L4kSTZPg.NZVYKLTE.mjs', 'utf8');
const r = /JuLSoFdug:"([^"]+)"/g;
let m;
let count = 0;
while ((m = r.exec(txt)) !== null) {
  count++;
  console.log(`${count}: ${m[1]}`);
}
