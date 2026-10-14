const fs = require('fs');
const css = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const idx = css.indexOf('.framer-k46oy');
console.log('CSS for .framer-k46oy:');
console.log(css.slice(idx, idx + 800));

const idxBottom = css.indexOf('.framer-1uwm5q7');
console.log('CSS for .framer-1uwm5q7:');
console.log(css.slice(idxBottom, idxBottom + 800));
