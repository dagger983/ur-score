const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs', 'utf8');

const regex = /className:"framer-lm4fet"/g;
let m;
while ((m = regex.exec(txt)) !== null) {
  console.log('Found lm4fet in gtIORG at', m.index);
}
