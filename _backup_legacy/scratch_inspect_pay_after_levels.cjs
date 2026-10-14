const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');
const idx = txt.indexOf('Payment Screen');
const levIdx = txt.indexOf('"Levels"', idx);
console.log('Levels at:', levIdx);
console.log(txt.slice(levIdx, levIdx + 2000));
