const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/script_main.4UR2MR5E.mjs', 'utf8');

const idx = txt.indexOf('framer-tq51ue');
console.log('framer-tq51ue in script_main:', txt.slice(Math.max(0, idx - 200), idx + 800));
