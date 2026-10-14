const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const qeIdx = txt.indexOf('qe=');
console.log('qe definition at:', qeIdx);
if (qeIdx !== -1) {
  console.log(txt.slice(qeIdx, qeIdx + 1200));
}
