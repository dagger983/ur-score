const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

const homeScreenIdx = f5b4b.indexOf('layoutId:"m1JmsPrk6"');
const homeStatusEnd = f5b4b.indexOf('withExternalLayout:!0})]})', homeScreenIdx);
const payScreenIdx = f5b4b.indexOf('layoutId:"fgYg2A_C_"');

console.log('Home Screen at', homeScreenIdx);
console.log('Home Status End at', homeStatusEnd);
console.log('Payment Screen at', payScreenIdx);

const homeSlice = f5b4b.slice(homeStatusEnd, payScreenIdx);
console.log('Home Slice length:', homeSlice.length);
console.log('Home Slice beginning:', homeSlice.slice(0, 150));
console.log('Home Slice end:', homeSlice.slice(-150));
