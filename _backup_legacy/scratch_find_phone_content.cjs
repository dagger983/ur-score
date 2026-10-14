const fs = require('fs');
const files = [
  'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs',
  'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/8Nm7_wvcGLFdzSV1G1D4bKaLo9DKRlz3ydWkk7Vu2mg.USSSVTTB.mjs'
];

for (const f of files) {
  const txt = fs.readFileSync(f, 'utf8');
  console.log(`=== ${f} ===`);
  for (const term of ['Haley', 'Baylee', 'Aria', 'River', 'Receiver', '1234', 'Add Note', 'Optimal', 'Payment Screen']) {
    console.log(`  ${term}: ${txt.indexOf(term)}`);
  }
}
