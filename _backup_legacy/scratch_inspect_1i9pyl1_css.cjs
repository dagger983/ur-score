const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const idx = txt.indexOf('.framer-BfVuj .framer-1i9pyl1');
console.log('CSS index:', idx);
if (idx !== -1) {
  console.log(txt.slice(idx - 50, idx + 450));
}
