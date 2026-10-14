const fs = require('fs');

const file = 'payer_clone/payer.framer.website/index.html';
let html = fs.readFileSync(file, 'utf8');

// Find existing customStyles
const startMarker = '/* UR Score Phone Mockup & Crisp Logo Overrides */';
const endMarker = '.framer-tq51ue svg, .framer-11evgwc svg, .framer-1uho7c7 svg {\n  image-rendering: auto !important;\n}\n';

const newStylesBlock = `/* UR Score Phone Mockup & Crisp Logo Overrides */
[data-framer-name="Start Screen"], .framer-k46oy {
  background-image: url('/framerusercontent.com/images/enhanced_screen_1_know_your_score.png') !important;
  background-size: cover !important;
  background-position: center !important;
  border-radius: 32px !important;
}
[data-framer-name="Home Screen"], .framer-p7nyl6 {
  background-image: url('/framerusercontent.com/images/enhanced_screen_2_understand_credit.png') !important;
  background-size: cover !important;
  background-position: center !important;
  border-radius: 32px !important;
}
[data-framer-name="Payment Screen"], .framer-1ujhebw {
  background-image: url('/framerusercontent.com/images/enhanced_screen_3_improve_with_plan.png') !important;
  background-size: cover !important;
  background-position: center !important;
  border-radius: 32px !important;
}

[data-framer-name="Start Screen"] > div:not([data-framer-name="Status Bar"]),
[data-framer-name="Home Screen"] > div:not([data-framer-name="Status Bar"]),
[data-framer-name="Payment Screen"] > div:not([data-framer-name="Status Bar"]),
.framer-k46oy > div:not(.framer-1vurc46),
.framer-p7nyl6 > div:not(.framer-197msv3),
.framer-1ujhebw > div:not(.framer-rb037m),
.framer-1uwm5q7,
.framer-1549xg4,
.framer-u8l4v9,
.framer-20t0ey,
.framer-b9dbna,
.framer-1tg2q8y,
.framer-1bqmh6j,
.framer-16wduzs {
  display: none !important;
}

[data-framer-name="Status Bar"],
.framer-1vurc46, .framer-197msv3, .framer-rb037m {
  background-color: transparent !important;
  position: relative !important;
  z-index: 10 !important;
}
[data-framer-name="Status Bar"] .framer-text,
.framer-1vurc46 .framer-text, .framer-197msv3 .framer-text, .framer-rb037m .framer-text {
  --extracted-r6o4lv: rgb(15, 23, 42) !important;
  color: rgb(15, 23, 42) !important;
}
[data-framer-name="Status Bar"] svg rect,
[data-framer-name="Status Bar"] svg path,
.framer-1vurc46 svg rect, .framer-1vurc46 svg path,
.framer-197msv3 svg rect, .framer-197msv3 svg path,
.framer-rb037m svg rect, .framer-rb037m svg path {
  fill: #0f172a !important;
  stroke: #0f172a !important;
}

.framer-tq51ue, .framer-11evgwc, .framer-1uho7c7 {
  aspect-ratio: 1 / 1 !important;
  width: 32px !important;
  height: 32px !important;
  image-rendering: auto !important;
}
.framer-tq51ue svg, .framer-11evgwc svg, .framer-1uho7c7 svg {
  image-rendering: auto !important;
}
`;

const sIdx = html.indexOf(startMarker);
if (sIdx !== -1) {
  const eIdx = html.indexOf('</style>', sIdx);
  html = html.slice(0, sIdx) + newStylesBlock + html.slice(eIdx);
  console.log('Replaced custom styles in index.html');
} else {
  html = html.replace('</head>', `<style>${newStylesBlock}</style></head>`);
  console.log('Appended custom styles to index.html');
}

fs.writeFileSync(file, html, 'utf8');
console.log('Successfully saved index.html!');
