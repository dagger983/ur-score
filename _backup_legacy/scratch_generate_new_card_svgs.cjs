const fs = require('fs');

// We have 5 target SVGs to replace:
// 1. svg-1796426772_4257 -> Brain (Purple #8B5CF6)
// 2. svg-1880125910_4413 -> Lightbulb (Gold #F59E0B)
// 3. svg562521627_4399 -> AI Sparkles (Blue #2563EB)
// 4. svg656287312_4184 -> Rocket (Green #10B981)
// 5. svg-457599713_4727 -> Shield (Cyan/Teal #06B6D4)

function makeSvg(id, bgColor, innerGraphic) {
  return `<svg width="54" height="54" fill="none" id="${id}">
  <rect x="3" width="48" height="48" rx="14" fill="${bgColor}"/>
  <rect x="3" width="48" height="48" rx="14" fill="url(#grad_${id})"/>
  <rect x="4" y="1" width="46" height="46" rx="13" stroke="rgba(255,255,255,0.25)" stroke-width="1.5"/>
  <g transform="translate(15, 12)">
    ${innerGraphic}
  </g>
  <defs>
    <linearGradient id="grad_${id}" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop stop-color="#ffffff" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0.35"/>
    </linearGradient>
  </defs>
</svg>`;
}

const brainGraphic = `
  <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" fill="rgba(255,255,255,0.92)" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" fill="rgba(255,255,255,0.92)" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
`;

const bulbGraphic = `
  <path d="M9 18h6m-5 3h4m-5-9c-1.5-1.5-2-3-2-5a5 5 0 0 1 10 0c0 2-.5 3.5-2 5l-1 2h-4l-1-2Z" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="rgba(255,255,255,0.9)"/>
  <line x1="12" y1="1" x2="12" y2="3.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
  <line x1="4.5" y1="4.5" x2="6.5" y2="6.5" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
  <line x1="19.5" y1="4.5" x2="17.5" y2="6.5" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/>
`;

const aiSparklesGraphic = `
  <path d="m12 2-2.2 6.5a2 2 0 0 1-1.3 1.3L2 12l6.5 2.2a2 2 0 0 1 1.3 1.3L12 22l2.2-6.5a2 2 0 0 1 1.3-1.3L22 12l-6.5-2.2a2 2 0 0 1-1.3-1.3Z" fill="rgba(255,255,255,0.95)" stroke="#ffffff" stroke-width="1"/>
  <circle cx="19" cy="5" r="1.5" fill="#ffffff"/>
  <circle cx="5" cy="19" r="1" fill="#ffffff"/>
`;

const rocketGraphic = `
  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="rgba(255,255,255,0.9)"/>
  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="rgba(255,255,255,0.95)"/>
  <circle cx="15.5" cy="8.5" r="1.5" fill="#10B981"/>
`;

const shieldGraphic = `
  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(255,255,255,0.3)" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="m9 12 2 2 4-4" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
`;

const svgs = {
  'svg-1796426772_4257': makeSvg('svg-1796426772_4257', '#7C3AED', brainGraphic),
  'svg-1880125910_4413': makeSvg('svg-1880125910_4413', '#D97706', bulbGraphic),
  'svg562521627_4399': makeSvg('svg562521627_4399', '#2563EB', aiSparklesGraphic),
  'svg656287312_4184': makeSvg('svg656287312_4184', '#059669', rocketGraphic),
  'svg-457599713_4727': makeSvg('svg-457599713_4727', '#0891B2', shieldGraphic)
};

console.log('SVGs generated successfully');
module.exports = { svgs };
