const fs = require('fs');

const path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const content = fs.readFileSync(path, 'utf8');

const regex = /svg:'(<svg[^']+<\/svg>)'/g;
let m;
let i = 0;
while ((m = regex.exec(content)) !== null) {
  i++;
  if (i <= 7) {
    console.log(`=== SVG PROP ${i} (length ${m[1].length}) ===`);
    console.log(m[1]);
  }
}
