const fs = require('fs');

const dlHtmlPath = 'payer_clone/payer.framer.website/download.html';
let dlHtml = fs.readFileSync(dlHtmlPath, 'utf8');

// Ensure image is also copied to root / payer.framer.website if accessed relatively
const srcImg = 'payer_clone/framerusercontent.com/images/ur_score_splash_screen_dark.png';
const destImg = 'payer_clone/payer.framer.website/ur_score_splash_screen_dark.png';
if (fs.existsSync(srcImg) && !fs.existsSync(destImg)) {
  fs.copyFileSync(srcImg, destImg);
}

// Update download.html CSS override
const targetBlockRegex = /\/\* UR Score Download Mockup[\s\S]*?\[data-framer-name="Screen"\] \.framer-1vf55g4[^}]*\}/;

const darkScreenStyle = `/* UR Score Download Mockup & Crisp Logo Overrides */
[data-framer-name="Screen"], .framer-19xlp0i {
  background-image: url('../framerusercontent.com/images/ur_score_splash_screen_dark.png') !important;
  background-size: cover !important;
  background-position: center !important;
  border-radius: 24px !important;
  padding: 0 !important;
  position: relative !important;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
}
[data-framer-name="Screen"] .framer-ymqvgx, .framer-19xlp0i .framer-ymqvgx {
  background-color: transparent !important;
  position: absolute !important;
  top: 0 !important;
  left: 50% !important;
  transform: translate(-50%) !important;
  width: 100% !important;
  padding: 8px 16px 0 28px !important;
  z-index: 10 !important;
}
[data-framer-name="Screen"] .framer-ymqvgx .framer-text, .framer-19xlp0i .framer-ymqvgx .framer-text {
  --framer-text-color: #ffffff !important;
  color: #ffffff !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.7) !important;
}
[data-framer-name="Screen"] .framer-ymqvgx svg rect,
[data-framer-name="Screen"] .framer-ymqvgx svg path,
.framer-19xlp0i .framer-ymqvgx svg rect,
.framer-19xlp0i .framer-ymqvgx svg path {
  fill: #ffffff !important;
  stroke: #ffffff !important;
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.6)) !important;
}
[data-framer-name="Screen"] .framer-u8l4v9,
[data-framer-name="Screen"] .framer-1vf55g4,
.framer-19xlp0i .framer-u8l4v9,
.framer-19xlp0i .framer-1vf55g4 {
  display: none !important;
}`;

if (targetBlockRegex.test(dlHtml)) {
  dlHtml = dlHtml.replace(targetBlockRegex, darkScreenStyle);
  fs.writeFileSync(dlHtmlPath, dlHtml, 'utf8');
  console.log('Successfully replaced download.html styles with dark splash screen!');
} else {
  // If not matched regex, append to head
  dlHtml = dlHtml.replace('</head>', `<style>\n${darkScreenStyle}\n</style>\n</head>`);
  fs.writeFileSync(dlHtmlPath, dlHtml, 'utf8');
  console.log('Appended darkScreenStyle to head in download.html');
}

// Also update gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs
const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
let mjs = fs.readFileSync(mjsFile, 'utf8');
mjs = mjs.replace(/"--framer-text-color":"rgb\(15, 23, 42\)"/g, '"--framer-text-color":"rgb(255, 255, 255)"');
mjs = mjs.replace(/stroke="#0f172a"/g, 'stroke="#fff"');
mjs = mjs.replace(/fill="#0f172a"/g, 'fill="#fff"');
fs.writeFileSync(mjsFile, mjs, 'utf8');
console.log('Successfully updated gtIORG mjs status bar colors to white!');
