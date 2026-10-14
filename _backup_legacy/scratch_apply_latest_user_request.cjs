const fs = require('fs');

console.log('=== 1. Removing Card 4 from HXv7 ===');
const hxv7Path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
let hxv7 = fs.readFileSync(hxv7Path, 'utf8');

const start1a = hxv7.indexOf(',e("div",{className:"framer-1a070ev"');
if (start1a !== -1) {
  const endMarker = 'withExternalLayout:!0})})})]})})';
  const endIdx = hxv7.indexOf(endMarker, start1a);
  if (endIdx !== -1) {
    const totalEnd = endIdx + endMarker.length;
    hxv7 = hxv7.slice(0, start1a) + hxv7.slice(totalEnd);
    console.log('Successfully removed Card 4 from HXv7 mjs');
  } else {
    console.log('Warning: could not find endMarker in HXv7');
  }
} else {
  console.log('Warning: start1a not found in HXv7');
}

fs.writeFileSync(hxv7Path, hxv7, 'utf8');


console.log('\n=== 2. Updating features.html (3 cards layout) ===');
let fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

// Remove Card 4 DOM from features.html
// Look for framer-1a070ev in features.html
const f1aIdx = fHtml.indexOf('<div class="framer-1a070ev"');
if (f1aIdx !== -1) {
  // Find where this card ends (before </section> or </main>)
  const f1aEnd = fHtml.indexOf('</div></div></div></div></div></div></section>', f1aIdx);
  if (f1aEnd !== -1) {
    fHtml = fHtml.slice(0, f1aIdx) + fHtml.slice(f1aEnd + '</div></div></div>'.length);
    console.log('Removed Card 4 from features.html DOM');
  }
}

// Update features.html custom CSS
fHtml = fHtml.replace(/<style id="ur-features-perfect-style">[\s\S]*?<\/style>/g, '');

const perfect3CardsFeaturesStyle = `
<style id="ur-features-perfect-style">
/* Clean Base Layout */
html, body, #main {
  background-color: #000000 !important;
}

.framer-DlyyI .framer-18krjv0 {
  position: relative !important;
  top: 0 !important;
  left: 0 !important;
  transform: none !important;
  width: 100% !important;
  background-color: #000000 !important;
  z-index: 2 !important;
}

/* Features Hero Section Alignment */
.framer-DlyyI .framer-1bnx6p {
  height: 480px !important;
  max-height: 480px !important;
  min-height: 480px !important;
  position: relative !important;
  overflow: hidden !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
}

.framer-DlyyI .framer-1no5ctm {
  height: 100% !important;
  max-height: 480px !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  pointer-events: none !important;
}

.framer-DlyyI .framer-807x45-container {
  position: absolute !important;
  top: 40% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  z-index: 5 !important;
}

.framer-DlyyI .framer-14rpyf7 {
  position: absolute !important;
  bottom: 36px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  max-width: 580px !important;
  width: 90% !important;
  margin: 0 !important;
  z-index: 10 !important;
  text-align: center !important;
}

.framer-DlyyI .framer-14rpyf7 p {
  font-size: 16px !important;
  line-height: 1.5 !important;
  color: rgba(255, 255, 255, 0.7) !important;
}

@media (max-width: 809px) {
  .framer-DlyyI .framer-1bnx6p {
    height: 420px !important;
    max-height: 420px !important;
    min-height: 420px !important;
  }
  .framer-DlyyI .framer-807x45-container {
    top: 36% !important;
  }
  .framer-DlyyI .framer-14rpyf7 {
    bottom: 24px !important;
    max-width: 340px !important;
  }
  .framer-DlyyI .framer-14rpyf7 p {
    font-size: 14px !important;
    line-height: 1.4 !important;
  }
}

/* 3 Cards Bento Grid Layout: Row 1 has 2 cards, Row 2 has 1 full-width Privacy card */
.framer-DlyyI .framer-1a070ev {
  display: none !important;
}

.framer-DlyyI .framer-153rjps {
  display: flex !important;
  flex-direction: row !important;
  width: 100% !important;
  justify-content: center !important;
}

.framer-DlyyI .framer-1xvouze {
  flex: 1 1 100% !important;
  width: 100% !important;
  max-width: 100% !important;
  height: 400px !important;
}

.framer-DlyyI .framer-1qqw9qy {
  width: 100% !important;
}

@media (max-width: 809px) {
  .framer-DlyyI .framer-1xvouze {
    height: min-content !important;
  }
}

/* Footer position */
.framer-112cift-container {
  position: relative !important;
  top: auto !important;
  left: auto !important;
  transform: none !important;
  z-index: 2 !important;
  width: 100% !important;
}

.framer-li12gk {
  display: none !important;
}
</style>
`;

fHtml = fHtml.replace('</head>', perfect3CardsFeaturesStyle + '</head>');
fs.writeFileSync('payer_clone/payer.framer.website/features.html', fHtml, 'utf8');
console.log('Saved updated features.html');


console.log('\n=== 3. Removing Status Bar (Battery/WiFi/Time) from Download Page ===');
const gtMjsPath = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
let gtMjs = fs.readFileSync(gtMjsPath, 'utf8');

// In gtMjs, remove the Status Bar JSX from Screen children:
// e.g. children:[i("div",{className:"framer-ymqvgx","data-framer-name":"Status Bar", ... })]
const gtSbIdx = gtMjs.indexOf('children:[i("div",{className:"framer-ymqvgx"');
if (gtSbIdx !== -1) {
  const gtSbEnd = gtMjs.indexOf('withExternalLayout:!0})]})', gtSbIdx);
  if (gtSbEnd !== -1) {
    const totalSbEnd = gtSbEnd + 'withExternalLayout:!0})]})'.length;
    gtMjs = gtMjs.slice(0, gtSbIdx) + 'children:[]' + gtMjs.slice(totalSbEnd);
    console.log('Removed Status Bar from gtIORG mjs');
  }
}
fs.writeFileSync(gtMjsPath, gtMjs, 'utf8');


let dlHtml = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

// Remove Status Bar DOM from download.html
const dlSbRegex = /<div class="framer-ymqvgx" data-framer-name="Status Bar">[\s\S]*?<\/div><\/div><\/div>/;
if (dlSbRegex.test(dlHtml)) {
  dlHtml = dlHtml.replace(dlSbRegex, '');
  console.log('Removed Status Bar from download.html DOM');
}

// Update download.html CSS
dlHtml = dlHtml.replace(/<style id="ur-dl-perfect-style">[\s\S]*?<\/style>/g, '');

const perfectDlNoStatusStyle = `
<style id="ur-dl-perfect-style">
/* Clean Single Centered Phone Mockup without Battery / WiFi / Status Bar */
.framer-z3pJ7 .framer-yxzpdu {
  top: 76% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) perspective(1200px) rotateX(15deg) !important;
}

[data-framer-name="Status Bar"], .framer-ymqvgx {
  display: none !important;
}

[data-framer-name="Screen"], .framer-19xlp0i {
  position: absolute !important;
  left: calc(50% - 98% / 2) !important;
  top: calc(50% - 98.55% / 2) !important;
  width: 98% !important;
  height: 99% !important;
  background: radial-gradient(circle at 50% 34%, #1e293b 0%, #0a0f1d 70%, #020617 100%) !important;
  background-image: none !important;
  border-radius: 24px !important;
  padding: 0 !important;
  overflow: hidden !important;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1) !important;
}

.ur-splash-center {
  position: absolute !important;
  top: 46% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  width: 100% !important;
  text-align: center !important;
  pointer-events: none !important;
}

@media (max-width: 809px) {
  .framer-z3pJ7 .framer-yxzpdu {
    top: 76% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) perspective(1200px) rotateX(15deg) scale(0.9) !important;
  }
}
</style>
`;

dlHtml = dlHtml.replace('</head>', perfectDlNoStatusStyle + '</head>');
fs.writeFileSync('payer_clone/payer.framer.website/download.html', dlHtml, 'utf8');
console.log('Saved updated download.html');
