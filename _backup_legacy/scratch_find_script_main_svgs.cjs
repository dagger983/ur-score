const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/script_main.4UR2MR5E.mjs', 'utf8');

// Find occurrences of svg:'<svg or svg:"<svg
const matches = [];
const r = /svg:['"](<svg[^>]+>[\s\S]*?<\/svg>)['"]/g;
let m;
while ((m = r.exec(txt)) !== null) {
  matches.push({ len: m[1].length, snippet: m[1].slice(0, 120) });
}
console.log('SVGs in script_main:', matches);

// Check if any old logos exist in script_main
console.log('script_main has ur_score_logo:', txt.includes('ur_score_logo'));
console.log('script_main has svg-2139612630_280:', txt.includes('svg-2139612630_280'));
