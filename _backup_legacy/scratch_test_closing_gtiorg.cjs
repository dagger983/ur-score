const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
let txt = fs.readFileSync(mjsFile, 'utf8');

const targetStr = 'Official CIBIL Synced"})]})]})}),i("div",{className:"framer-gskx1f"';
console.log('Contains targetStr:', txt.includes(targetStr));

// Let's test replacements for the closing sequence
const testClosing = 'Official CIBIL Synced"})]})]})})]})}),i("div",{className:"framer-gskx1f"';
if (txt.includes(targetStr)) {
  const newTxt = txt.replace(targetStr, testClosing);
  fs.writeFileSync(mjsFile, newTxt, 'utf8');
  console.log('Replaced with testClosing');
}
