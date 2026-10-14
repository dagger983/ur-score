const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const sIdx = txt.indexOf('"framer-19xlp0i"');
const afterStatus = txt.indexOf('className:"framer-u8l4v9"', sIdx);
console.log('afterStatus:', afterStatus);

// Find where children of framer-19xlp0i ends
// It ends where the closing bracket of children:[...] is
// Let's trace from sIdx
console.log(txt.slice(sIdx, sIdx + 400));
console.log('--- afterStatus ---');
console.log(txt.slice(afterStatus - 50, afterStatus + 300));
