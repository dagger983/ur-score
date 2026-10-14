const fs = require('fs');

const file = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs';
let txt = fs.readFileSync(file, 'utf8');

txt = txt.replace(/\.\.\/framerusercontent\.com\/images\/enhanced_screen_/g, '/framerusercontent.com/images/enhanced_screen_');
fs.writeFileSync(file, txt, 'utf8');
console.log('Replaced relative paths in 5B4B mjs!');
