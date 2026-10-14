const fs = require('fs');
const content = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

// Check line numbers around markers
const idx = content.indexOf('framer-p7nyl6');
console.log('Around framer-p7nyl6:');
console.log(content.slice(idx - 40, idx + 40));

const idxPay = content.indexOf('framer-1ujhebw');
console.log('Around framer-1ujhebw:');
console.log(content.slice(idxPay - 40, idxPay + 40));

const idxCt = content.indexOf(',Ct=["@supports');
console.log('Around Ct:');
console.log(content.slice(idxCt - 40, idxCt + 40));
