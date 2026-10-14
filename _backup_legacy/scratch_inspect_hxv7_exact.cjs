const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');
const start = txt.indexOf('children:e(b,{className:"framer-1x6bsw4"');
console.log('start at:', start);
const end = txt.indexOf('withExternalLayout:!0})})', start);
console.log('end at:', end);
console.log('Full chunk to replace:');
console.log(txt.slice(start, end + 'withExternalLayout:!0})})'.length));
