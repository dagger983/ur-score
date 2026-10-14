const fs = require('fs');

const path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const content = fs.readFileSync(path, 'utf8');

// Find all data-framer-name in this file
const regex = /"data-framer-name":"([^"]+)"/g;
let m;
const names = [];
while ((m = regex.exec(content)) !== null) {
  if (!names.includes(m[1])) names.push(m[1]);
}
console.log('Component names in HXv7:', names);
