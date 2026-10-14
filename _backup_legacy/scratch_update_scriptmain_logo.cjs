const fs = require('fs');
let txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/script_main.4UR2MR5E.mjs', 'utf8');

const prefix = 'className:"framer-tq51ue framer-16v0twc","data-framer-name":"Logo",fill:"black",intrinsicHeight:48,intrinsicWidth:40,svg:\'';
const startIdx = txt.indexOf(prefix);
console.log('Prefix at:', startIdx);

if (startIdx !== -1) {
  const svgStart = startIdx + prefix.length;
  // find next single quote
  const svgEnd = txt.indexOf("'", svgStart);
  console.log('svgEnd at:', svgEnd, 'length:', svgEnd - svgStart);
  console.log('Around svgEnd:');
  console.log(txt.slice(svgEnd - 50, svgEnd + 50));

  // Clean SVG:
  const newSvg = '<svg width="40" height="40" fill="none" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image width="1024" height="1024" x="0" y="0" href="../framerusercontent.com/images/ur_score_logo.png" preserveAspectRatio="xMidYMid meet" style="image-rendering:auto;-webkit-optimize-contrast"/></svg>';

  const newPrefix = 'className:"framer-tq51ue framer-16v0twc","data-framer-name":"Logo",fill:"black",intrinsicHeight:40,intrinsicWidth:40,svg:\'';

  txt = txt.slice(0, startIdx) + newPrefix + newSvg + txt.slice(svgEnd);
  fs.writeFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/script_main.4UR2MR5E.mjs', txt);
  console.log('Successfully updated navbar logo in script_main.4UR2MR5E.mjs!');
}
