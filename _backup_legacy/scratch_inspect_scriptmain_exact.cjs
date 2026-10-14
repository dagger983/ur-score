const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/script_main.4UR2MR5E.mjs', 'utf8');

const idx = txt.indexOf('framer-tq51ue framer-16v0twc');
console.log('framer-tq51ue context:');
console.log(txt.slice(idx - 50, idx + 400));
