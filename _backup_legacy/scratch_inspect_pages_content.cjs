const fs = require('fs');

const files = {
  company: 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/QXA6kpwDHD9R9vWPZGdUf4q50yi3D9TbGMdHlKr4W9g.EJJQNXSP.mjs',
  support: 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/PA9P1ZMWcjOiVejJmKq_Jc4NnxPKpDOgsS-L4kSTZPg.NZVYKLTE.mjs',
  features: 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs',
  download: 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs'
};

for (const [name, path] of Object.entries(files)) {
  console.log(`\n=================== ${name.toUpperCase()} ===================`);
  const txt = fs.readFileSync(path, 'utf8');
  const textRegex = /children:\"([^\"]{10,200})\"/g;
  let m;
  const snippets = new Set();
  while ((m = textRegex.exec(txt)) !== null) {
    const s = m[1];
    if (!s.includes('<') && !s.includes('{') && !s.includes('rgb') && !s.includes('px') && !s.includes('http') && !s.includes('var(')) {
      snippets.add(s);
    }
  }
  for (const s of snippets) {
    console.log('-', s);
  }
}
