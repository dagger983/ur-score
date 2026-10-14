const fs = require('fs');

const dir = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk';

const cleanSvg = `<svg width="40" height="40" fill="none" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image width="1024" height="1024" x="0" y="0" href="/framerusercontent.com/images/ur_score_logo.png" preserveAspectRatio="xMidYMid meet" style="image-rendering:auto;-webkit-optimize-contrast"/></svg>`;

// Files to update:
// 1. script_main.4UR2MR5E.mjs
// 2. HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs
// 3. 5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs
// 4. 8Nm7_wvcGLFdzSV1G1D4bKaLo9DKRlz3ydWkk7Vu2mg.USSSVTTB.mjs

function replaceLogoInFile(filename) {
  const fullPath = `${dir}/${filename}`;
  let content = fs.readFileSync(fullPath, 'utf8');
  let originalLen = content.length;

  // Pattern: svg:'<svg width="40" height="48" fill="none" viewBox="0 0 40 48" ... </svg>'
  // Note that the old SVG can be very long (base64 image inside), up to 1MB!
  const regex = /svg:['"]<svg width="40" height="48" fill="none" viewBox="0 0 40 48"[\s\S]*?<\/svg>['"]/g;
  let matches = 0;
  content = content.replace(regex, (match) => {
    matches++;
    return `svg:'${cleanSvg}'`;
  });

  // Also replace intrinsicHeight:48,intrinsicWidth:40 with intrinsicHeight:40,intrinsicWidth:40 around logos
  content = content.replace(/intrinsicHeight:48,intrinsicWidth:40/g, 'intrinsicHeight:40,intrinsicWidth:40');

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Updated ${filename}: replaced ${matches} instances (diff: ${content.length - originalLen} bytes)`);
}

replaceLogoInFile('script_main.4UR2MR5E.mjs');
replaceLogoInFile('HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs');
replaceLogoInFile('5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs');
replaceLogoInFile('8Nm7_wvcGLFdzSV1G1D4bKaLo9DKRlz3ydWkk7Vu2mg.USSSVTTB.mjs');

console.log('Done replacing logos in all 4 mjs files.');
