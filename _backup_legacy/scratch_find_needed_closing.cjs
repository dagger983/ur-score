const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

const payIdx = f5b4b.indexOf('layoutId:"fgYg2A_C_"');
const payStatusEnd = f5b4b.indexOf('withExternalLayout:!0})]})', payIdx);
const cutPoint = payStatusEnd + 'withExternalLayout:!0})]})'.length;

let stack = [];
for (let i = 0; i < cutPoint; i++) {
  const ch = f5b4b[i];
  if (ch === '(' || ch === '[' || ch === '{') {
    stack.push(ch);
  } else if (ch === ')' || ch === ']' || ch === '}') {
    stack.pop();
  }
}
console.log('Unclosed at cutPoint from start of file:', stack.join(''));

const ctIdx = f5b4b.indexOf(',Ct=["@supports');
let stackCt = [];
for (let i = 0; i < ctIdx; i++) {
  const ch = f5b4b[i];
  if (ch === '(' || ch === '[' || ch === '{') {
    stackCt.push(ch);
  } else if (ch === ')' || ch === ']' || ch === '}') {
    stackCt.pop();
  }
}
console.log('Unclosed at ctIdx from start of file:', stackCt.join(''));

// The difference between stack and stackCt is exactly what we need to close!
console.log('Diff length:', stack.length - stackCt.length);
const diffStack = stack.slice(stackCt.length);
console.log('Diff stack:', diffStack.join(''));
const matching = { '(': ')', '[': ']', '{': '}' };
const needed = diffStack.reverse().map(ch => matching[ch]).join('');
console.log('Needed closing string:', needed);
