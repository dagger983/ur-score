const fs = require('fs');

const dlFile = 'payer_clone/payer.framer.website/download.html';
let dlHtml = fs.readFileSync(dlFile, 'utf8');

const oldStyles = `/* UR Score Download Mockup & Crisp Logo Overrides */
[data-framer-name="Screen"], .framer-19xlp0i {
  background-image: url('../framerusercontent.com/images/enhanced_screen_1_know_your_score.png') !important;
  background-size: cover !important;
  background-position: center !important;
  border-radius: 24px !important;
}
[data-framer-name="Screen"] .framer-ymqvgx, .framer-19xlp0i .framer-ymqvgx {
  background-color: transparent !important;
  position: relative !important;
  z-index: 5 !important;
}
[data-framer-name="Screen"] .framer-ymqvgx .framer-text, .framer-19xlp0i .framer-ymqvgx .framer-text {
  --framer-text-color: rgb(15, 23, 42) !important;
  color: rgb(15, 23, 42) !important;
}
[data-framer-name="Screen"] .framer-ymqvgx svg rect,
[data-framer-name="Screen"] .framer-ymqvgx svg path,
.framer-19xlp0i .framer-ymqvgx svg rect,
.framer-19xlp0i .framer-ymqvgx svg path {
  fill: #0f172a !important;
  stroke: #0f172a !important;
}
[data-framer-name="Screen"] .framer-u8l4v9,
[data-framer-name="Screen"] .framer-1vf55g4,
.framer-19xlp0i .framer-u8l4v9,
.framer-19xlp0i .framer-1vf55g4 {
  display: none !important;
}`;

const newStyles = `/* UR Score Download Mockup & Crisp Logo Overrides */
[data-framer-name="Screen"], .framer-19xlp0i {
  background-image: url('../framerusercontent.com/images/enhanced_screen_1_know_your_score.png') !important;
  background-size: cover !important;
  background-position: center !important;
  border-radius: 24px !important;
  padding: 0 !important;
  position: relative !important;
}
[data-framer-name="Screen"] .framer-ymqvgx, .framer-19xlp0i .framer-ymqvgx {
  background-color: transparent !important;
  position: absolute !important;
  top: 0 !important;
  left: 50% !important;
  transform: translate(-50%) !important;
  width: 100% !important;
  padding: 6px 14px 0 32px !important;
  z-index: 10 !important;
}
[data-framer-name="Screen"] .framer-ymqvgx .framer-text, .framer-19xlp0i .framer-ymqvgx .framer-text {
  --framer-text-color: rgb(15, 23, 42) !important;
  color: rgb(15, 23, 42) !important;
}
[data-framer-name="Screen"] .framer-ymqvgx svg rect,
[data-framer-name="Screen"] .framer-ymqvgx svg path,
.framer-19xlp0i .framer-ymqvgx svg rect,
.framer-19xlp0i .framer-ymqvgx svg path {
  fill: #0f172a !important;
  stroke: #0f172a !important;
}
[data-framer-name="Screen"] .framer-u8l4v9,
[data-framer-name="Screen"] .framer-1vf55g4,
.framer-19xlp0i .framer-u8l4v9,
.framer-19xlp0i .framer-1vf55g4 {
  display: none !important;
}`;

if (dlHtml.includes(oldStyles)) {
  dlHtml = dlHtml.replace(oldStyles, newStyles);
  fs.writeFileSync(dlFile, dlHtml, 'utf8');
  console.log('Successfully updated download.html styles!');
} else {
  console.log('oldStyles not found exactly in download.html, doing targeted replacement');
  dlHtml = dlHtml.replace(/position:\s*relative\s*!important;\s*z-index:\s*5\s*!important;/, 'position: absolute !important; top: 0 !important; left: 50% !important; transform: translate(-50%) !important; width: 100% !important; padding: 6px 14px 0 32px !important; z-index: 10 !important;');
  dlHtml = dlHtml.replace(/border-radius:\s*24px\s*!important;/, 'border-radius: 24px !important; padding: 0 !important; position: relative !important;');
  fs.writeFileSync(dlFile, dlHtml, 'utf8');
  console.log('Saved fallback replacement to download.html');
}

// Also update gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs status bar text color
const mjsFile = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
let mjs = fs.readFileSync(mjsFile, 'utf8');
mjs = mjs.replace(/"--framer-text-color":"rgb\(255, 255, 255\)"},children:"9:41"/g, '"--framer-text-color":"rgb(15, 23, 42)"},children:"9:41"');
mjs = mjs.replace(/stroke="#fff"/g, 'stroke="#0f172a"');
mjs = mjs.replace(/fill="#fff"/g, 'fill="#0f172a"');
fs.writeFileSync(mjsFile, mjs, 'utf8');
console.log('Successfully updated gtIORG status bar colors in mjs!');
