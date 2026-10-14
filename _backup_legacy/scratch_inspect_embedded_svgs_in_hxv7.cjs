const fs = require('fs');

const path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const content = fs.readFileSync(path, 'utf8');

const idx = content.indexOf('M38.5 25.4a6.3');
console.log('Index:', idx);
console.log(content.slice(idx - 300, idx + 1200));
