const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

for (const name of ['Start Screen', 'Home Screen', 'Payment Screen']) {
  const idx = txt.indexOf(name);
  console.log(`=== ${name} at ${idx} ===`);
  console.log(txt.slice(idx, idx + 400));
}
