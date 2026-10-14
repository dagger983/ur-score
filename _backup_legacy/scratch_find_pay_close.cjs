const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

// Find children of Payment Screen
const payIdx = f5b4b.indexOf('layoutId:"fgYg2A_C_"');
const childrenIdx = f5b4b.indexOf('children:[', payIdx);
console.log('childrenIdx:', childrenIdx);

// Let's count brackets to find where children: [...] closes
let depth = 0;
let started = false;
let endIdx = -1;
for (let i = childrenIdx + 'children:'.length; i < childrenIdx + 70000; i++) {
  if (f5b4b[i] === '[') {
    depth++;
    started = true;
  } else if (f5b4b[i] === ']') {
    depth--;
    if (started && depth === 0) {
      endIdx = i;
      break;
    }
  }
}

console.log('Payment Screen children closing bracket at:', endIdx);
console.log('After endIdx:', f5b4b.slice(endIdx, endIdx + 100));
