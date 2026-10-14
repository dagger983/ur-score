const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');
const idx = txt.indexOf('Payment Screen');
const endSvg = txt.indexOf('</svg>`', idx);
console.log('endSvg at:', endSvg);
console.log(txt.slice(endSvg, endSvg + 1000));
