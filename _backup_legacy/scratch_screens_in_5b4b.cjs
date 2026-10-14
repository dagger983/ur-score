const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

const regex = /data-framer-name":"(Start Screen|Home Screen|Payment Screen|1 Desktop|2 Phone|3 Desktop|2 Desktop|1 Phone|3 Phone)"/g;
let m;
while ((m = regex.exec(f5b4b)) !== null) {
  console.log('Screen item:', m[1], 'at', m.index);
}
