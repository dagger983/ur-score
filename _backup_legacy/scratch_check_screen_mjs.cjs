const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
const mjs = fs.readFileSync(mjsFile, 'utf8');

const screenIdx = mjs.indexOf('"Screen"');
console.log('Screen idx:', screenIdx);
if (screenIdx !== -1) {
  console.log(mjs.substring(screenIdx - 100, screenIdx + 400));
}
