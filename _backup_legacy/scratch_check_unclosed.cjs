const fs = require('fs');
const f5b4b = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs', 'utf8');

const heroPhoneIdx = f5b4b.indexOf('data-framer-name":"Apple iPhone 16 Pro Natural Titanium"');
const payIdx = f5b4b.indexOf('layoutId:"fgYg2A_C_"');
const payStatusEnd = f5b4b.indexOf('withExternalLayout:!0})]})', payIdx);
const cutPoint = payStatusEnd + 'withExternalLayout:!0})]})'.length;

let stack = [];
for (let i = heroPhoneIdx; i < cutPoint; i++) {
  const ch = f5b4b[i];
  if (ch === '(' || ch === '[' || ch === '{') {
    stack.push(ch);
  } else if (ch === ')' || ch === ']' || ch === '}') {
    stack.pop();
  }
}
console.log('Unclosed at cutPoint:', stack.join(''));

// Required closing brackets in reverse order:
const matching = { '(': ')', '[': ']', '{': '}' };
const needed = stack.reverse().map(ch => matching[ch]).join('');
console.log('Needed closing string:', needed);
