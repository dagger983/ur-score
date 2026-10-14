const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const sIdx = txt.indexOf('"framer-19xlp0i"');
const screenChunk = txt.slice(sIdx, sIdx + 15000);

const classes = screenChunk.match(/className:"([^"]+)"/g) || [];
console.log('Classes inside Screen:');
classes.forEach(c => console.log(c));
