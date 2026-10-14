const fs = require('fs');
const content = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const regex = /data-framer-name":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(`Found: "${match[1]}" at pos ${match.index}`);
}
