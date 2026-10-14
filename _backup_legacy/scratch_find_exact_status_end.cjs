const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const sIdx = txt.indexOf('"framer-19xlp0i"');
const statusStart = txt.indexOf('i("div",{className:"framer-ymqvgx"', sIdx);
console.log('statusStart at:', statusStart);

// We want to find the closing ')' of this i("div", ...) call
// The opening '(' of i("div", ...) is at statusStart + 1
const stack = ['('];
let statusEnd = -1;
for (let i = statusStart + 2; i < txt.length; i++) {
  const ch = txt[i];
  if (ch === '(' || ch === '[' || ch === '{') {
    stack.push(ch);
  } else if (ch === ')' || ch === ']' || ch === '}') {
    const top = stack.pop();
    if (stack.length === 0) {
      statusEnd = i;
      break;
    }
  }
}
console.log('Exact statusEnd at:', statusEnd);
console.log('Snippet around statusEnd:\n', txt.slice(statusEnd - 40, statusEnd + 40));
