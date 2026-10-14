const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

const idx = f5b4b.indexOf('layoutId:"BYt05tkJv"');
console.log('BYt05tkJv (Start Screen):');
// Let's print from idx - 200 up to where Graphic ends
const graphicIdx = f5b4b.indexOf('"Graphic"', idx + 200);
console.log(f5b4b.slice(idx - 100, Math.min(f5b4b.length, idx + 800)));
