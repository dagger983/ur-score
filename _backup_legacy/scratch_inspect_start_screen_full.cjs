const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

const idx = f5b4b.indexOf('layoutId:"BYt05tkJv"');
// Let's find where BYt05tkJv ends
console.log(f5b4b.slice(idx, idx + 6000));
