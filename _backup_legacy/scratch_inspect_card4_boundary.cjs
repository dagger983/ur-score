const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const startIdx = txt.indexOf(',e("div",{className:"framer-1a070ev"');

// Look for the end of framer-1a070ev:
// It ends with withExternalLayout:!0})})})]})})
const endMarker = 'withExternalLayout:!0})})})]})})';
const endIdx = txt.indexOf(endMarker, startIdx);
console.log('Found endIdx:', endIdx);
console.log('Segment:');
console.log(txt.slice(endIdx, endIdx + endMarker.length + 50));
