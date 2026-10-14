const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');
const idx = f5b4b.indexOf('mkWvjRGf3');
const afterSvg = f5b4b.indexOf('withExternalLayout', idx);
console.log('After logomark svg:');
console.log(f5b4b.slice(afterSvg - 50, afterSvg + 1500));
