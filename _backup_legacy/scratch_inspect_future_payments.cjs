const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/company.html', 'utf8');
const idx = html.indexOf('Future of Payments');
console.log('HTML context:');
console.log(html.slice(idx - 100, idx + 300));

const mjs = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/QXA6kpwDHD9R9vWPZGdUf4q50yi3D9TbGMdHlKr4W9g.EJJQNXSP.mjs', 'utf8');
const idx2 = mjs.indexOf('Future of Payments');
console.log('MJS context:');
console.log(mjs.slice(idx2 - 100, idx2 + 300));
