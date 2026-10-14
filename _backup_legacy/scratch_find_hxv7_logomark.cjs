const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');
let pos = 0, count = 0;
while ((pos = txt.indexOf('Logomark', pos)) !== -1) {
  count++;
  console.log(`Match ${count} at ${pos}:`);
  console.log(txt.slice(pos - 60, pos + 300));
  console.log('---');
  pos += 8;
}
