const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const yrIdx = txt.indexOf('yr=');
const endYr = txt.indexOf('var gr=', yrIdx);
const chunk = txt.slice(yrIdx, endYr !== -1 ? endYr : yrIdx + 50000);

const icons = [];
const r = /"data-framer-name":"([^"]+)"/g;
let m;
while ((m = r.exec(chunk)) !== null) {
  icons.push(m[1]);
}
console.log('All elements in yr:', Array.from(new Set(icons)));
