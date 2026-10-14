const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const startIdx = txt.indexOf('"framer-1f9z2qh"');
console.log('framer-1f9z2qh snippet (2500 chars):');
console.log(txt.slice(startIdx, startIdx + 3500));
