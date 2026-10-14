const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/PA9P1ZMWcjOiVejJmKq_Jc4NnxPKpDOgsS-L4kSTZPg.NZVYKLTE.mjs', 'utf8');

// Find all question/answer components
const regex = /children:\"([^\"]{10,200})\"/g;
let m;
while ((m = regex.exec(txt)) !== null) {
  if (m[1].includes('?') || m[1].includes('How') || m[1].includes('What') || m[1].includes('Can') || m[1].includes('Why') || m[1].includes('credit') || m[1].includes('score')) {
    console.log('FAQ text:', m[1]);
  }
}
