const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/support.html', 'utf8');

const r = /class="framer-styles-preset-[^"]*"[^>]*>([^<]*bank processing times[^<]*)<\/p>/;
const m = html.match(r);
console.log('Answer 1 snippet:', m ? m[1] : 'not found');
