const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const sIdx = txt.indexOf('"framer-19xlp0i"');
const endIdx = txt.indexOf('className:"framer-k0biff"', sIdx); // find end or next element
console.log(txt.slice(sIdx, sIdx + 3000));
