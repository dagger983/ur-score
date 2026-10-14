const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const sIdx = txt.indexOf('"framer-19xlp0i"');
const childrenStart = txt.indexOf('children:[', sIdx);
console.log('childrenStart:', childrenStart);

// Let's count brackets to find matching ']'
let depth = 0;
let endIdx = -1;
for (let i = childrenStart + 9; i < txt.length; i++) {
  if (txt[i] === '[') depth++;
  else if (txt[i] === ']') {
    if (depth === 0) {
      endIdx = i;
      break;
    }
    depth--;
  }
}

console.log('Matching ] at:', endIdx);
console.log('Snippet around matching ]:\n', txt.slice(endIdx - 100, endIdx + 100));

// Also let's find where the Status Bar element ends
const statusStart = txt.indexOf('i("div",{className:"framer-ymqvgx"', sIdx);
let pDepth = 0;
let statusEnd = -1;
for (let i = statusStart + 7; i < txt.length; i++) {
  if (txt[i] === '(') pDepth++;
  else if (txt[i] === ')') {
    if (pDepth === 0) {
      statusEnd = i;
      break;
    }
    pDepth--;
  }
}
console.log('Status Bar ends at:', statusEnd);
console.log('Snippet around statusEnd:\n', txt.slice(statusEnd - 50, statusEnd + 50));
