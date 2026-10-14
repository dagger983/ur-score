const fs = require('fs');

const files = [
  'payer_clone/payer.framer.website/index.html',
  'payer_clone/payer.framer.website/download.html',
  'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/8Nm7_wvcGLFdzSV1G1D4bKaLo9DKRlz3ydWkk7Vu2mg.USSSVTTB.mjs',
  'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs',
  'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n=== In ${file} ===`);
  const svgMatches = content.match(/svg-2139612630_280/g) || [];
  const logomarkMatches = content.match(/data-framer-name="Logomark"/g) || [];
  const urLogoMatches = content.match(/ur_score_logo/g) || [];
  console.log(`svg-2139612630_280: ${svgMatches.length}`);
  console.log(`data-framer-name="Logomark": ${logomarkMatches.length}`);
  console.log(`ur_score_logo: ${urLogoMatches.length}`);
}
