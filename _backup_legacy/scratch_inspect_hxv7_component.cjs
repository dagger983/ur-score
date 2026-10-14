const fs = require('fs');

const path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const content = fs.readFileSync(path, 'utf8');

const idx = content.indexOf('AI Integrations');
console.log('Index:', idx);
console.log('Surrounding code:');
console.log(content.slice(Math.max(0, idx - 400), idx + 400));
