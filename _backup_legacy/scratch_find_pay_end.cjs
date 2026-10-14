const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

const payStatusEnd = 1120506;
// Search for end of Payment Screen
const endPhone = f5b4b.indexOf('Apple iPhone 16 Pro Natural Titanium', payStatusEnd);
console.log('Apple iPhone after pay:', endPhone);
if (endPhone === -1) {
  // find next major component
  console.log('Next 10000 chars from payStatusEnd:');
  const slice = f5b4b.slice(payStatusEnd, payStatusEnd + 20000);
  const m = slice.match(/layoutId:"[^"]+"/g);
  console.log('Layout IDs:', m);
}
