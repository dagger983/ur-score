const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/QXA6kpwDHD9R9vWPZGdUf4q50yi3D9TbGMdHlKr4W9g.EJJQNXSP.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

const r = /children:"([^"]{10,180})"/g;
let m;
console.log('Strings in company mjs:');
while ((m = r.exec(txt)) !== null) {
  if (!m[1].includes('<') && !m[1].includes('{') && !m[1].includes('rgb') && !m[1].includes('px')) {
    console.log('-', m[1]);
  }
}
