const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

const regex = /data-framer-name":"([^"]+)"/g;
let m;
let names = new Set();
while ((m = regex.exec(f5b4b)) !== null) {
  names.add(m[1]);
}
console.log('All framer names in 5b4b:', Array.from(names));
