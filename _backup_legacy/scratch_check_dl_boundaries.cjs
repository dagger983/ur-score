const fs = require('fs');
let html = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

// Find the screen start
const screenStart = html.indexOf('class="framer-19xlp0i"');
console.log('screenStart:', screenStart);

// Let's see the phone frame wrapper end.
// After the screen, where does framer-lm4fet end?
const lm4fetStart = html.lastIndexOf('class="framer-lm4fet"', screenStart);
console.log('lm4fetStart:', lm4fetStart);

// Let's look at the next major section after the screen:
// The action buttons / footer or whatever follows
const nextSection = html.indexOf('</section>', screenStart);
console.log('nextSection:', nextSection);

// Let's see what is between screenStart and nextSection
console.log('Snippet:');
console.log(html.slice(screenStart, screenStart + 1500));
