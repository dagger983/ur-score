const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

const payScreenIdx = f5b4b.indexOf('layoutId:"fgYg2A_C_"');
const payStatusEnd = f5b4b.indexOf('withExternalLayout:!0})]})', payScreenIdx);

console.log('Payment Screen at', payScreenIdx);
console.log('Payment Status End at', payStatusEnd);

// Let's find the closing of Payment Screen
// Payment Screen is a child of the phone container.
// Let's search for "Phone Frame" or "Apple iPhone 16 Pro Natural Titanium" after payStatusEnd
const nextPhone = f5b4b.indexOf('layoutId:', payStatusEnd + 100);
console.log('Next layoutId after payStatusEnd at', nextPhone);
console.log(f5b4b.slice(payStatusEnd, payStatusEnd + 1000));
