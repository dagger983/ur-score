const fs = require('fs');

const file = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
let content = fs.readFileSync(file, 'utf8');

const targetStart = 'children:e(b,{className:"framer-1x6bsw4"';
const targetEnd = 'withExternalLayout:!0})})';

const startIndex = content.indexOf(targetStart);
const endIndex = content.indexOf(targetEnd, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.error('Target chunk not found!');
  process.exit(1);
}

const replacement = `children:e(b,{className:"framer-1x6bsw4","data-framer-name":"Logomark (2)",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"q_xaSYk6Q",style:{filter:"drop-shadow(0px 0px 14px rgba(37, 99, 235, 0.7))",WebkitFilter:"drop-shadow(0px 0px 14px rgba(37, 99, 235, 0.7))"},svg:'<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="ur-orbit-clip"><rect x="3" y="3" width="48" height="48" rx="12" fill="#fff"/></clipPath></defs><g clip-path="url(#ur-orbit-clip)"><image href="/framerusercontent.com/images/ur_score_logo.png" x="3" y="3" width="48" height="48" preserveAspectRatio="xMidYMid meet"/></g><rect x="3" y="3" width="48" height="48" rx="12" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.5"/></svg>',withExternalLayout:!0})})`;

const newContent = content.slice(0, startIndex) + replacement + content.slice(endIndex + targetEnd.length);
fs.writeFileSync(file, newContent, 'utf8');
console.log('Successfully updated orbit central logo in HXv7!');
