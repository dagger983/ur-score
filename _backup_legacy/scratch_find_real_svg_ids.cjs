const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
const sm = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/script_main.4UR2MR5E.mjs', 'utf8');

console.log('In features.html:', fHtml.indexOf('svg-1678641818_1075'));
console.log('In script_main:', sm.indexOf('svg-1678641818_1075'));
