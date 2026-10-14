const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/QXA6kpwDHD9R9vWPZGdUf4q50yi3D9TbGMdHlKr4W9g.EJJQNXSP.mjs', 'utf8');

const regex = /children:\"([^\"]{10,200})\"/g;
let m;
while ((m = regex.exec(txt)) !== null) {
  if (!m[1].includes('<') && !m[1].includes('{') && !m[1].includes('rgb') && !m[1].includes('px')) {
    console.log(m[1]);
  }
}
