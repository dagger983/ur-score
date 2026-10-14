const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

// Find Logomark (2)
const centerIdx = txt.indexOf('"Logomark (2)"');
console.log('Center node snippet:');
console.log(txt.slice(centerIdx - 150, centerIdx + 800));

// Find where Security Icon or the left node is
const leftIdx = txt.indexOf('Security Icon');
console.log('\nLeft node (Security Icon) snippet:');
console.log(txt.slice(leftIdx - 150, leftIdx + 800));
