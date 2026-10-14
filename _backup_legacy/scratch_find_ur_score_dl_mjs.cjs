const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const idx = txt.indexOf('UR SCORE');
console.log('UR SCORE in gtIORG at:', idx);
if (idx !== -1) {
  console.log(txt.slice(idx - 200, idx + 400));
}
