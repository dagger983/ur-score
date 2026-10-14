const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const sIdx = txt.indexOf('"framer-19xlp0i"');
console.log('Wrappers before 19xlp0i (500 chars):');
console.log(txt.slice(Math.max(0, sIdx - 500), sIdx));

const afterReplacement = txt.indexOf('Official CIBIL Synced');
console.log('After replacement (100 chars):');
console.log(txt.slice(afterReplacement, afterReplacement + 120));
