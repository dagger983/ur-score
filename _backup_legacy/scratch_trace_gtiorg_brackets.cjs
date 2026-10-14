const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const sIdx = txt.indexOf('"framer-19xlp0i"');
const checkStart = Math.max(0, sIdx - 200);
const checkEnd = Math.min(txt.length, sIdx + 3000);

// Check bracket balance from 0 to checkEnd
const stack = [];
for (let i = 0; i < txt.length; i++) {
  const ch = txt[i];
  if (ch === '(' || ch === '[' || ch === '{') {
    stack.push({ ch, idx: i });
  } else if (ch === ')' || ch === ']' || ch === '}') {
    const top = stack.pop();
    if (!top) {
      console.log(`Extra closing ${ch} at ${i}! Snippet:`, txt.slice(Math.max(0, i - 40), i + 40));
      break;
    }
    const expected = top.ch === '(' ? ')' : top.ch === '[' ? ']' : '}';
    if (ch !== expected) {
      console.log(`Mismatched ${ch} at ${i}, expected ${expected} (opened ${top.ch} at ${top.idx})!`);
      console.log('Snippet around error:\n', txt.slice(Math.max(0, i - 60), i + 60));
      break;
    }
  }
}
console.log('Finished bracket balance check.');
