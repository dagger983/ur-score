const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');
const idx = txt.indexOf('"Security Icon"');
console.log('Security Icon at:', idx);
if (idx !== -1) {
  console.log(txt.slice(idx - 60, idx + 400));
}
