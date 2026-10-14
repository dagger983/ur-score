const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

const payIdx = f5b4b.indexOf('layoutId:"fgYg2A_C_"');
const payStatusEnd = f5b4b.indexOf('withExternalLayout:!0})]})', payIdx);
const ctIdx = f5b4b.indexOf(',Ct=["@supports');

console.log('Payment Status Bar ends at', payStatusEnd);
console.log('Ct starts at', ctIdx);

// Let's count depth of '(' and '[' from payIdx
let stack = [];
for (let i = payIdx; i < ctIdx; i++) {
  const ch = f5b4b[i];
  if (ch === '(' || ch === '[' || ch === '{') {
    stack.push({ ch, pos: i });
  } else if (ch === ')' || ch === ']' || ch === '}') {
    const last = stack.pop();
  }
}
console.log('Remaining unclosed at ctIdx:', stack.map(s => s.ch).join(''));
