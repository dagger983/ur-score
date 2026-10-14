const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

// Find stack at the start of our replacement
const rIdx = txt.indexOf('ur-splash-center');
const stack = [];
for (let i = 0; i < rIdx - 30; i++) {
  const ch = txt[i];
  if (ch === '(' || ch === '[' || ch === '{') {
    stack.push({ ch, idx: i, snippet: txt.slice(Math.max(0, i - 30), i + 20) });
  } else if (ch === ')' || ch === ']' || ch === '}') {
    stack.pop();
  }
}
console.log('Open brackets before replacement (length ' + stack.length + '):');
stack.slice(-8).forEach(s => console.log(s.ch, 'at', s.idx, '-->', s.snippet.replace(/\n/g, ' ')));
