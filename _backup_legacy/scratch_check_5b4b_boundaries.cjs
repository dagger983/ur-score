const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

// Start Screen children
const startScreenIdx = f5b4b.indexOf('layoutId:"BYt05tkJv"');
console.log('Start Screen at', startScreenIdx);

// Status Bar end
const statusBarEnd = f5b4b.indexOf('withExternalLayout:!0})]})', startScreenIdx);
console.log('Status Bar end at', statusBarEnd);

// Start Screen children closing bracket
const homeScreenIdx = f5b4b.indexOf('layoutId:"m1JmsPrk6"');
console.log('Home Screen at', homeScreenIdx);

// Between statusBarEnd and homeScreenIdx is Bottom and Graphic!
const slice = f5b4b.slice(statusBarEnd, homeScreenIdx);
console.log('Between Status Bar and Home Screen length:', slice.length);
console.log('Beginning of slice:', slice.slice(0, 200));
console.log('End of slice:', slice.slice(-200));
