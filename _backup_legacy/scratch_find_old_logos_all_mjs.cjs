const fs = require('fs');
const path = require('path');

const dir = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.mjs'));

for (const file of files) {
  const fullPath = path.join(dir, file);
  const content = fs.readFileSync(fullPath, 'utf8');
  let hasOldViewBox = content.includes('viewBox="0 0 40 48"');
  let has4048 = content.includes('intrinsicHeight:48');
  let hasLogo = content.includes('"Logo"');
  if (hasOldViewBox || has4048) {
    console.log(`File ${file} has old logo: viewBox 40 48=${hasOldViewBox}, intrinsicHeight 48=${has4048}`);
  }
}
