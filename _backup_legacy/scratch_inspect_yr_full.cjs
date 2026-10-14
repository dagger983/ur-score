const fs = require('fs');
const js = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');
const idx = js.indexOf('xe=L(yr,gr');
const yrFunc = js.lastIndexOf('function(', idx);
console.log('yr definition length:', idx - yrFunc);
console.log('yr start:');
console.log(js.slice(yrFunc, yrFunc + 300));
console.log('yr end:');
console.log(js.slice(idx - 300, idx));
