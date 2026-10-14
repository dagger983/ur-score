const fs = require('fs');

const file = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const content = fs.readFileSync(file, 'utf8');

const idx = content.indexOf('framer-1x6bsw4');
console.log('framer-1x6bsw4 index:', idx);
if (idx !== -1) {
  console.log('Before:', content.substring(idx - 250, idx));
  console.log('After:', content.substring(idx, idx + 400));
}

// Also let's check CSS for framer-1i9pyl1 and framer-1x6bsw4
const idxCss = content.indexOf('.framer-1i9pyl1');
console.log('CSS index:', idxCss);
if (idxCss !== -1) {
  console.log('CSS:', content.substring(idxCss - 50, idxCss + 350));
}
