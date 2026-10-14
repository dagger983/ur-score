const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const cardIdx = fHtml.indexOf('class="framer-knnqq3"');
const cardEnd = fHtml.indexOf('data-framer-name="Text"', cardIdx);
const cardChunk = fHtml.slice(cardIdx, cardEnd);

const regex = /use\s+href="([^"]+)"/g;
let m;
while ((m = regex.exec(cardChunk)) !== null) {
  console.log('Used SVG in card:', m[1]);
}
