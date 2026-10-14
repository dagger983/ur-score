const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

console.log('--- Home Screen (first 1000 chars) ---');
console.log(f5b4b.slice(1077491, 1077491 + 1000));

console.log('--- Payment Screen (first 1000 chars) ---');
console.log(f5b4b.slice(1115502, 1115502 + 1000));
