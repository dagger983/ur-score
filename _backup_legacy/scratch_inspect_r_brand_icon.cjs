const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const rIdx = txt.indexOf('_r=');
console.log('_r at:', rIdx);
if (rIdx !== -1) {
  console.log(txt.slice(rIdx, rIdx + 1500));
}
