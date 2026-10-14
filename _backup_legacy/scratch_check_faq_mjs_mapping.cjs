const fs = require('fs');

const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/PA9P1ZMWcjOiVejJmKq_Jc4NnxPKpDOgsS-L4kSTZPg.NZVYKLTE.mjs';
const txt = fs.readFileSync(mjsFile, 'utf8');

// Find all occurrences of FAQ component or answers
const matches = [];
const r = /NLrWcdM50:"([^"]+)"[\s\S]*?JuLSoFdug:"([^"]+)"/g;
let m;
while ((m = r.exec(txt)) !== null) {
  matches.push({ q: m[1], a: m[2] });
}
console.log('FAQ matches (NLrWcdM50 -> JuLSoFdug):', matches);

// Check if JuLSoFdug is before or after NLrWcdM50
const r2 = /JuLSoFdug:"([^"]+)"[\s\S]{0,200}?NLrWcdM50:"([^"]+)"/g;
let m2;
while ((m2 = r2.exec(txt)) !== null) {
  console.log('FAQ match 2:', { q: m2[2], a: m2[1] });
}
