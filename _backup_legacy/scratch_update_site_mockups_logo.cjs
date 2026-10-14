const fs = require('fs');

console.log('=== Updating index.html ===');
let indexHtml = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

// 1. Update #svg-2139612630_280 definition in index.html
// Replace the huge base64 symbol with clean 1024x1024 SVG referencing ur_score_logo.png
const symbolRegex = /<svg width="40" height="48" viewBox="0 0 40 48" fill="none" id="svg-2139612630_280"[^>]*>[\s\S]*?<\/svg>/;
const cleanSymbol = `<svg width="40" height="40" viewBox="0 0 1024 1024" fill="none" id="svg-2139612630_280" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image width="1024" height="1024" x="0" y="0" href="../framerusercontent.com/images/ur_score_logo.png" preserveAspectRatio="xMidYMid meet" style="image-rendering:auto;-webkit-optimize-contrast"/></svg>`;

if (symbolRegex.test(indexHtml)) {
  indexHtml = indexHtml.replace(symbolRegex, cleanSymbol);
  console.log('Replaced svg-2139612630_280 symbol in index.html');
} else {
  console.log('Warning: symbolRegex did not match in index.html');
}

// 2. Update viewBox="0 0 40 48" around svg-2139612630_280 to viewBox="0 0 1024 1024"
indexHtml = indexHtml.replace(/viewBox="0 0 40 48"><use href="#svg-2139612630_280"/g, 'viewBox="0 0 1024 1024"><use href="#svg-2139612630_280"');

// 3. Remove image-rendering:pixelated on logo containers
indexHtml = indexHtml.replace(/image-rendering:pixelated;flex-shrink:0;fill:black;color:black" class="framer-tq51ue/g, 'image-rendering:auto;flex-shrink:0;fill:black;color:black" class="framer-tq51ue');
indexHtml = indexHtml.replace(/image-rendering:pixelated;flex-shrink:0;fill:black;color:black" class="framer-11evgwc/g, 'image-rendering:auto;flex-shrink:0;fill:black;color:black" class="framer-11evgwc');
indexHtml = indexHtml.replace(/image-rendering:pixelated;flex-shrink:0;fill:black;color:black" class="framer-1uho7c7/g, 'image-rendering:auto;flex-shrink:0;fill:black;color:black" class="framer-1uho7c7');

// 4. Inject ultra-crisp styling for phone mockups and navbar logo into <style> block of index.html
const customStyles = `
/* UR Score Phone Mockup & Crisp Logo Overrides */
.framer-k46oy {
  background-image: url('../framerusercontent.com/images/enhanced_screen_1_know_your_score.png') !important;
  background-size: cover !important;
  background-position: center !important;
  border-radius: 32px !important;
}
.framer-k46oy .framer-1vurc46 {
  background-color: transparent !important;
  position: relative !important;
  z-index: 5 !important;
}
.framer-k46oy .framer-1vurc46 .framer-text {
  --extracted-r6o4lv: rgb(15, 23, 42) !important;
  color: rgb(15, 23, 42) !important;
}
.framer-k46oy .framer-1vurc46 svg rect,
.framer-k46oy .framer-1vurc46 svg path {
  fill: #0f172a !important;
  stroke: #0f172a !important;
}
.framer-k46oy .framer-1uwm5q7,
.framer-k46oy .framer-1549xg4,
.framer-k46oy .framer-u8l4v9 {
  display: none !important;
}
.framer-p7nyl6 {
  background-image: url('../framerusercontent.com/images/enhanced_screen_2_understand_credit.png') !important;
  background-size: cover !important;
  background-position: center !important;
  border-radius: 32px !important;
}
.framer-p7nyl6 .framer-197msv3 {
  background-color: transparent !important;
  position: relative !important;
  z-index: 5 !important;
}
.framer-p7nyl6 .framer-197msv3 .framer-text {
  --extracted-r6o4lv: rgb(15, 23, 42) !important;
  color: rgb(15, 23, 42) !important;
}
.framer-p7nyl6 .framer-197msv3 svg rect,
.framer-p7nyl6 .framer-197msv3 svg path {
  fill: #0f172a !important;
  stroke: #0f172a !important;
}
.framer-p7nyl6 .framer-20t0ey {
  display: none !important;
}
.framer-1ujhebw {
  background-image: url('../framerusercontent.com/images/enhanced_screen_3_improve_with_plan.png') !important;
  background-size: cover !important;
  background-position: center !important;
  border-radius: 32px !important;
}
.framer-1ujhebw .framer-rb037m {
  background-color: transparent !important;
  position: relative !important;
  z-index: 5 !important;
}
.framer-1ujhebw .framer-rb037m .framer-text {
  --extracted-r6o4lv: rgb(15, 23, 42) !important;
  color: rgb(15, 23, 42) !important;
}
.framer-1ujhebw .framer-rb037m svg rect,
.framer-1ujhebw .framer-rb037m svg path {
  fill: #0f172a !important;
  stroke: #0f172a !important;
}
.framer-1ujhebw .framer-b9dbna {
  display: none !important;
}
.framer-tq51ue {
  aspect-ratio: 1 / 1 !important;
  width: 32px !important;
  height: 32px !important;
  image-rendering: auto !important;
}
.framer-tq51ue svg, .framer-11evgwc svg, .framer-1uho7c7 svg {
  image-rendering: auto !important;
}
`;

indexHtml = indexHtml.replace('</head>', `<style>${customStyles}</style></head>`);
fs.writeFileSync('payer_clone/payer.framer.website/index.html', indexHtml);
console.log('Saved updated index.html');

console.log('\n=== Updating download.html ===');
let dlHtml = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

if (symbolRegex.test(dlHtml)) {
  dlHtml = dlHtml.replace(symbolRegex, cleanSymbol);
  console.log('Replaced svg-2139612630_280 symbol in download.html');
}

dlHtml = dlHtml.replace(/viewBox="0 0 40 48"><use href="#svg-2139612630_280"/g, 'viewBox="0 0 1024 1024"><use href="#svg-2139612630_280"');
dlHtml = dlHtml.replace(/image-rendering:pixelated;flex-shrink:0;fill:black;color:black" class="framer-tq51ue/g, 'image-rendering:auto;flex-shrink:0;fill:black;color:black" class="framer-tq51ue');
dlHtml = dlHtml.replace(/image-rendering:pixelated;flex-shrink:0;fill:black;color:black" class="framer-11evgwc/g, 'image-rendering:auto;flex-shrink:0;fill:black;color:black" class="framer-11evgwc');

const dlCustomStyles = `
/* UR Score Download Mockup & Crisp Logo Overrides */
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
}
.framer-tq51ue {
  aspect-ratio: 1 / 1 !important;
  width: 32px !important;
  height: 32px !important;
  image-rendering: auto !important;
}
`;

dlHtml = dlHtml.replace('</head>', `<style>${dlCustomStyles}</style></head>`);
fs.writeFileSync('payer_clone/payer.framer.website/download.html', dlHtml);
console.log('Saved updated download.html');

console.log('\n=== Updating script_main.4UR2MR5E.mjs ===');
let scriptMain = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/script_main.4UR2MR5E.mjs', 'utf8');

// Replace the navbar logo JSX svg definition in script_main
const scriptMainLogoRegex = /intrinsicHeight:48,intrinsicWidth:40,svg:'<svg width="40" height="48" fill="none" viewBox="0 0 40 48" xmlns="http:\/\/www\.w3\.org\/2000\/svg" xmlns:xlink="http:\/\/www\.w3\.org\/1999\/xlink"><image width="40" height="40" x="0" y="4" href="data:image\/png;base64,[^']*'\}\)/;
const scriptMainLogoReplacement = `intrinsicHeight:40,intrinsicWidth:40,svg:'<svg width="40" height="40" fill="none" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><image width="1024" height="1024" x="0" y="0" href="../framerusercontent.com/images/ur_score_logo.png" preserveAspectRatio="xMidYMid meet" style="image-rendering:auto;-webkit-optimize-contrast"/></svg>'})`;

if (scriptMainLogoRegex.test(scriptMain)) {
  scriptMain = scriptMain.replace(scriptMainLogoRegex, scriptMainLogoReplacement);
  console.log('Replaced logo in script_main.4UR2MR5E.mjs');
} else {
  console.log('Warning: scriptMainLogoRegex did not match');
}

// Update aspect ratio in script_main CSS
scriptMain = scriptMain.replace(/\.framer-3gVIi \.framer-tq51ue \{ aspect-ratio: 0\.8333333333333334 \/ 1; flex: none; height: var\(--framer-aspect-ratio-supported, 24px\); position: relative; text-decoration: none; width: 20px; \}/g, '.framer-3gVIi .framer-tq51ue { aspect-ratio: 1 / 1; flex: none; height: 32px; position: relative; text-decoration: none; width: 32px; image-rendering: auto; }');

fs.writeFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/script_main.4UR2MR5E.mjs', scriptMain);
console.log('Saved updated script_main.4UR2MR5E.mjs');

console.log('\n=== Updating gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs (Download component) ===');
let gtMjs = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs', 'utf8');

// Update Status Bar colors in gtMjs
gtMjs = gtMjs.replace(/stroke="white"/g, 'stroke="#0f172a"');
gtMjs = gtMjs.replace(/fill="white"/g, 'fill="#0f172a"');
gtMjs = gtMjs.replace(/"--framer-text-color":"rgb\(255, 255, 255\)"/g, '"--framer-text-color":"rgb(15, 23, 42)"');

// Remove Graphic and Bottom from Screen component in gtMjs
// Find Screen children
const gtScreenIdx = gtMjs.indexOf('"data-framer-name":"Screen"');
if (gtScreenIdx !== -1) {
  const gtSbEnd = gtMjs.indexOf('withExternalLayout:!0})]})', gtScreenIdx) + 'withExternalLayout:!0})]})'.length;
  // Look for end of Screen children
  // After Status Bar was: ,e(ot,{... Graphic ...}),i("div",{className:"framer-1vf55g4", ... Bottom ...})]})
  const gtScreenEnd = gtMjs.indexOf(']})', gtSbEnd + 100);
  // Find where Bottom ends
  const gtBottomIdx = gtMjs.indexOf('"data-framer-name":"Bottom"', gtSbEnd);
  if (gtBottomIdx !== -1) {
    // Find the closing bracket of Screen
    const afterBottom = gtMjs.indexOf(']})', gtBottomIdx);
    if (afterBottom !== -1) {
      gtMjs = gtMjs.slice(0, gtSbEnd) + ']}' + gtMjs.slice(afterBottom + 2);
      console.log('Cleaned Screen children in gtIORG.mjs');
    }
  }
}

fs.writeFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs', gtMjs);
console.log('Saved updated gtIORG.mjs');
