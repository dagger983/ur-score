const fs = require('fs');
const js = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

// Find all occurrences of BfVuj
let pos = 0;
while (true) {
  const idx = js.indexOf('BfVuj', pos);
  if (idx === -1) break;
  console.log('Found BfVuj at', idx);
  console.log(js.slice(Math.max(0, idx - 50), idx + 100));
  pos = idx + 1;
}

// Find va definition
let vaIdx = js.indexOf('var va=');
if (vaIdx === -1) vaIdx = js.indexOf('let va=');
if (vaIdx === -1) vaIdx = js.indexOf('const va=');
if (vaIdx === -1) {
  // search for va=
  let p = 0;
  while (true) {
    const f = js.indexOf('va=', p);
    if (f === -1) break;
    console.log('Found va= at', f, js.slice(Math.max(0, f - 20), f + 50));
    p = f + 1;
  }
} else {
  console.log('Found va at', vaIdx, js.slice(vaIdx, vaIdx + 300));
}
