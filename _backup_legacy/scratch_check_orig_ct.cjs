const fs = require('fs');
const orig = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs.bak', 'utf8');

// Let's trace from end of Payment Screen in orig:
const ctIdx = orig.indexOf(',Ct=["@supports');
console.log('Original closing before Ct:');
console.log(JSON.stringify(orig.slice(ctIdx - 50, ctIdx)));
