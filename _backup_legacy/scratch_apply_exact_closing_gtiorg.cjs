const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
let txt = fs.readFileSync(mjsFile, 'utf8');

const regex = /Official CIBIL Synced"\}\)[\s\S]*?\,i\("div",\{className:"framer-gskx1f"/;
const exactClosing = 'Official CIBIL Synced"})]})]})]})}),i("div",{className:"framer-gskx1f"';

txt = txt.replace(regex, exactClosing);
fs.writeFileSync(mjsFile, txt, 'utf8');
console.log('Applied exact closing sequence 2.');
