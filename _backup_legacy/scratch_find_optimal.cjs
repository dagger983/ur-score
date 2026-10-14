const fs = require('fs');
const file = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs';
const content = fs.readFileSync(file, 'utf8');
const idx = content.indexOf('Optimal');
console.log('Optimal index:', idx);
if (idx !== -1) {
  console.log(content.slice(Math.max(0, idx - 400), idx + 600));
}
