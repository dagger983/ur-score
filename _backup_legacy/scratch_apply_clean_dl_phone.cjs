const fs = require('fs');

// 1. Update gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs
const mjsPath = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/gtIORGK0GvUQZmT9HZn--W6n9AK6VMKTg7DXmZsG07o.PHRZNJMW.mjs';
let mjs = fs.readFileSync(mjsPath, 'utf8');

// Replace top: "45%" with top: "34%" in ur-splash-center
mjs = mjs.replace('top:"45%"', 'top:"34%"');
mjs = mjs.replace('top: "45%"', 'top: "34%"');

fs.writeFileSync(mjsPath, mjs, 'utf8');
console.log('Updated gtIORG mjs successfully');

// 2. Update download.html
const htmlPath = 'payer_clone/payer.framer.website/download.html';
let html = fs.readFileSync(htmlPath, 'utf8');

const screenStart = html.indexOf('class="framer-19xlp0i"');
const nextSection = html.indexOf('</section>', screenStart);

const cleanScreenBlock = `class="framer-19xlp0i" data-framer-name="Screen" style="background:radial-gradient(circle at 50% 35%, #0f172a 0%, #030712 100%) !important;border-radius:24px;overflow:hidden;position:relative;"><div class="framer-ymqvgx" data-framer-name="Status Bar"><div class="framer-8ijbq0"><div class="framer-17t6v7e" data-framer-name="Time" style="outline:none;display:flex;flex-direction:column;justify-content:flex-start;flex-shrink:0;transform:none" data-framer-component-type="RichTextContainer"><p class="framer-text framer-styles-preset-15125hd" data-styles-preset="gY_4dISJ_" style="--framer-text-color:rgb(255, 255, 255)">9:41</p></div></div><div data-framer-component-type="SVG" data-framer-name="Levels" style="image-rendering:pixelated;flex-shrink:0;fill:rgba(0,0,0,1);color:rgba(0,0,0,1)" class="framer-1b0qxq6" aria-hidden="true"><div class="svgContainer" style="width:100%;height:100%;aspect-ratio:inherit"><svg style="width:100%;height:100%" viewBox="0 0 143 54"><use href="#svg568813755_2777"/></svg></div></div></div><div class="ur-splash-center" style="position:absolute;top:34%;left:50%;transform:translate(-50%, -50%);display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;text-align:center;pointer-events:none;"><div style="width:84px;height:84px;border-radius:22px;background:linear-gradient(135deg, #1e3a8a, #0284c7);padding:2px;box-shadow:0 0 35px rgba(2, 132, 199, 0.7), 0 0 15px rgba(59, 130, 246, 0.5);display:flex;align-items:center;justify-content:center;"><img src="../framerusercontent.com/images/ur_score_logo.png" style="width:100%;height:100%;border-radius:20px;object-fit:cover;" alt="UR Score"></div><p style="margin:14px 0 4px 0;font-family:Inter, sans-serif;font-size:18px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">UR SCORE</p><p style="margin:0;font-family:Inter, sans-serif;font-size:11px;font-weight:500;color:rgba(255, 255, 255, 0.65);letter-spacing:0.05em;text-transform:uppercase;">Official CIBIL Synced</p></div></div></div></div>`;

html = html.slice(0, screenStart) + cleanScreenBlock + html.slice(nextSection);

// Add custom CSS to ensure phone mockup is raised and centered on desktop and mobile
const customStyle = `<style id="ur-download-phone-fix">
.framer-z3pJ7 .framer-yxzpdu {
  top: 76% !important;
}
.framer-z3pJ7 .framer-19xlp0i {
  padding: 0 !important;
}
@media (max-width: 809px) {
  .framer-z3pJ7 .framer-yxzpdu {
    top: 76% !important;
    left: 50% !important;
    transform: translate(-50%, -50%) perspective(1200px) rotateX(15deg) scale(0.92) !important;
  }
}
</style>
</head>`;

if (!html.includes('id="ur-download-phone-fix"')) {
  html = html.replace('</head>', customStyle);
}

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Updated download.html successfully');
