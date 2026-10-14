const fs = require('fs');

const hxv7Path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
let js = fs.readFileSync(hxv7Path, 'utf8');

// Find all drop-shadows
const regex = /drop-shadow\([^)]+\)/g;
let m;
const shadows = [];
while ((m = regex.exec(js)) !== null) {
  if (!shadows.includes(m[0])) shadows.push(m[0]);
}
console.log('Drop shadows in HXv7:', shadows);
