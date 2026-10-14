const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const yrIdx = txt.indexOf('yr=');
console.log('yr definition at:', yrIdx);
console.log(txt.slice(yrIdx, yrIdx + 2000));
