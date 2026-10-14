const fs = require('fs');
let html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

const screenStart = html.indexOf('class="framer-19xlp0i"');
const nextSection = html.indexOf('</section>', screenStart);

// Let's inspect from screenStart to nextSection
const chunk = html.slice(screenStart, nextSection);
console.log('Total chunk length:', chunk.length);

// Count open and close divs in chunk
const opens = (chunk.match(/<div(\s|>)/g) || []).length;
const closes = (chunk.match(/<\/div>/g) || []).length;
console.log('Open divs:', opens, 'Close divs:', closes, 'Diff (opens - closes):', opens - closes);
