const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const regex = /"data-framer-name":"([^"]+)"[\s\S]*?svg:'([^']+)'/g;
let m;
while ((m = regex.exec(txt)) !== null) {
  console.log(`Node: "${m[1]}"`);
}
