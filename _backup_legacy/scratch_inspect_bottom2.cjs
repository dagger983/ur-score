const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');
const idx = f5b4b.indexOf('data-framer-name":"Bottom"');
const afterIdx = f5b4b.indexOf('data-framer-name":"Mockup"', idx);
console.log('Distance to Mockup or end:', afterIdx - idx);
console.log(f5b4b.slice(idx + 1000, idx + 4000));
