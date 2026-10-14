const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/QXA6kpwDHD9R9vWPZGdUf4q50yi3D9TbGMdHlKr4W9g.EJJQNXSP.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

console.log('Contains 75 Billion:', txt.includes('75 Billion') || txt.includes('$75'));
console.log('Contains 250 million:', txt.includes('250 million'));
console.log('Contains processed over:', txt.includes('processed over'));

// Check other mjs files if not in this one
const dir = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mjs'));
for (const f of files) {
  const c = fs.readFileSync(`${dir}/${f}`, 'utf8');
  if (c.includes('75 Billion') || c.includes('250 million')) {
    console.log(`Found milestone in ${f}`);
  }
}
