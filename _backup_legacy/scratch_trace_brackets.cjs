const fs = require('fs');
const orig = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs.bak', 'utf8');

const ctIdx = orig.indexOf(',Ct=["@supports');

// Let's find which open bracket matches each of the closing brackets before ctIdx!
let stack = [];
for (let i = 0; i < ctIdx; i++) {
  const ch = orig[i];
  if (ch === '(' || ch === '[' || ch === '{') {
    stack.push({ ch, pos: i });
  } else if (ch === ')' || ch === ']' || ch === '}') {
    const last = stack.pop();
    if (i >= ctIdx - 40) {
      // Print what this closed
      const context = orig.slice(Math.max(0, last.pos - 50), last.pos + 30).replace(/\n/g, ' ');
      console.log(`Closing bracket '${ch}' at ${i} closed '${last.ch}' at ${last.pos}: context: ${context}`);
    }
  }
}
