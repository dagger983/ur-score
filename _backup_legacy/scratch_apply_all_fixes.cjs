const fs = require('fs');
const path = require('path');
const { svgs } = require('./scratch_generate_new_card_svgs.cjs');

console.log('=== 1. Updating Footer CSS across all HTML files (restore sticky overflow) ===');

const allHtmlFiles = [
  'payer_clone/payer.framer.website/index.html',
  'payer_clone/payer.framer.website/features.html',
  'payer_clone/payer.framer.website/features/index.html',
  'payer_clone/payer.framer.website/download.html',
  'payer_clone/payer.framer.website/download/index.html',
  'payer_clone/payer.framer.website/company.html',
  'payer_clone/payer.framer.website/company/index.html',
  'payer_clone/payer.framer.website/support.html',
  'payer_clone/payer.framer.website/support/index.html',
  'payer_clone/payer.framer.website/privacy-policy.html',
  'payer_clone/payer.framer.website/terms-and-conditions.html',
  'payer_clone/payer.framer.website/careers.html'
];

for (const f of allHtmlFiles) {
  if (!fs.existsSync(f)) continue;
  let html = fs.readFileSync(f, 'utf8');

  // Replace overflow-x: hidden on framer-3gVIi with overflow: visible
  if (html.includes('.framer-3gVIi {')) {
    html = html.replace(
      /\.framer-3gVIi\s*\{[^}]*overflow-x:\s*hidden[^}]*\}/g,
      `.framer-3gVIi {
  min-height: 100vh !important;
  height: auto !important;
  display: flex !important;
  flex-direction: column !important;
  position: relative !important;
  overflow: visible !important;
}`
    );
  }

  fs.writeFileSync(f, html, 'utf8');
  console.log('Updated sticky overflow in:', f);
}

console.log('=== 2. Updating Features Card Copy and SVGs in features.html & features/index.html ===');

const newTitle = 'Clever AI Insights.';
const newDesc = ' A smart cognitive engine powered by predictive credit simulation, automated financial foresight, and clever real-time tips to elevate your score effortlessly.';

const featureFiles = [
  'payer_clone/payer.framer.website/features.html',
  'payer_clone/payer.framer.website/features/index.html'
];

for (const ff of featureFiles) {
  if (!fs.existsSync(ff)) continue;
  let fHtml = fs.readFileSync(ff, 'utf8');

  // Replace card text
  fHtml = fHtml.replace(
    /AI Integrations\.<\/span>\s*Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice\./g,
    `${newTitle}</span>${newDesc}`
  );

  // Also replace any other occurrences in text
  fHtml = fHtml.replace(
    /AI Integrations\./g,
    newTitle
  );
  fHtml = fHtml.replace(
    /Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice\./g,
    'A smart cognitive engine powered by predictive credit simulation, automated financial foresight, and clever real-time tips to elevate your score effortlessly.'
  );

  // Replace the 5 SVG symbols
  for (const [id, svgCode] of Object.entries(svgs)) {
    const regex = new RegExp('<svg[^>]*id="' + id + '"[\\s\\S]*?<\\/svg>', 'g');
    if (regex.test(fHtml)) {
      fHtml = fHtml.replace(regex, svgCode);
      console.log(`Replaced SVG ${id} in ${ff}`);
    } else {
      console.log(`SVG ${id} not found by regex in ${ff}`);
    }
  }

  fs.writeFileSync(ff, fHtml, 'utf8');
  console.log('Saved feature file:', ff);
}

console.log('=== 3. Updating HXv7 Component in JS ===');
const hxv7Path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
if (fs.existsSync(hxv7Path)) {
  let js = fs.readFileSync(hxv7Path, 'utf8');

  // Replace text
  js = js.replace(
    /children:"AI Integrations\."\}\)," Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice\."/g,
    `children:"${newTitle}"}),"${newDesc}"`
  );

  // Also catch other variations if any
  js = js.replace(/"AI Integrations\."/g, `"${newTitle}"`);
  js = js.replace(
    /" Unified with OpenAI, Claude, Gemini, and CIBIL to deliver intelligent credit simulations and personalized advice\."/g,
    `"${newDesc}"`
  );

  fs.writeFileSync(hxv7Path, js, 'utf8');
  console.log('Updated HXv7 component JS');
}

console.log('=== All updates applied successfully! ===');
