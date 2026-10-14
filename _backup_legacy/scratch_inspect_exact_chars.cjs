const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

const idx = f5b4b.indexOf(',Ct=["@supports');
console.log('Before ,Ct:');
console.log(JSON.stringify(f5b4b.slice(idx - 60, idx + 20)));
