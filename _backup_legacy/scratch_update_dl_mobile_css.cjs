const fs = require('fs');
let html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

const oldCss = `  .framer-z3pJ7 .framer-yxzpdu {
    top: 76% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) perspective(1200px) rotateX(15deg) scale(0.92) !important;
  }`;

const newCss = `  .framer-z3pJ7 .framer-yxzpdu {
    top: 75% !important;
    left: 50% !important;
    transform: translate(calc(-50% - 140px), -50%) perspective(1200px) rotateX(15deg) scale(0.88) !important;
  }`;

html = html.replace(oldCss, newCss);
fs.writeFileSync('payer_clone/payer.framer.website/download.html', html, 'utf8');
console.log('Updated mobile phone offset in download.html');
