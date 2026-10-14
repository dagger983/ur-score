const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const secStart = html.indexOf('data-framer-name="Animated Hero"');
const secEnd = html.indexOf('</section>', secStart);
const heroSection = html.slice(secStart, secEnd);

console.log('Hero section length:', heroSection.length);

const screenNames = [];
let p = 0;
while ((p = heroSection.indexOf('data-framer-name="', p)) !== -1) {
  const end = heroSection.indexOf('"', p + 18);
  const name = heroSection.slice(p + 18, end);
  if (name.includes('Screen') || name.includes('Phone') || name.includes('Phone Frame')) {
    screenNames.push({ name, pos: p });
  }
  p = end + 1;
}
console.log('Found screens/phones in Animated Hero:', screenNames);
