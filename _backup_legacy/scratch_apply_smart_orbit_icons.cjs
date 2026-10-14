const fs = require('fs');

const hxv7Path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
let js = fs.readFileSync(hxv7Path, 'utf8');

// 1. Brain SVG (Purple)
const brainSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="brain-bg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#4C1D95"/><stop offset="100%" stop-color="#2E1065"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#brain-bg)" stroke="rgba(167, 139, 250, 0.5)" stroke-width="1.5"/><g transform="translate(15, 12)"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z" fill="rgba(255,255,255,0.92)" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z" fill="rgba(255,255,255,0.92)" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`;

// 2. Lightbulb SVG (Gold)
const bulbSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bulb-bg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#B45309"/><stop offset="100%" stop-color="#78350F"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#bulb-bg)" stroke="rgba(251, 191, 36, 0.5)" stroke-width="1.5"/><g transform="translate(15, 12)"><path d="M9 18h6m-5 3h4m-5-9c-1.5-1.5-2-3-2-5a5 5 0 0 1 10 0c0 2-.5 3.5-2 5l-1 2h-4l-1-2Z" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="rgba(255,255,255,0.9)"/><line x1="12" y1="1" x2="12" y2="3.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><line x1="4.5" y1="4.5" x2="6.5" y2="6.5" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/><line x1="19.5" y1="4.5" x2="17.5" y2="6.5" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/></g></svg>`;

// 3. AI Sparkles SVG (Electric Blue)
const aiSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ai-bg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#1D4ED8"/><stop offset="100%" stop-color="#0F172A"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#ai-bg)" stroke="rgba(96, 165, 250, 0.5)" stroke-width="1.5"/><g transform="translate(15, 12)"><path d="m12 2-2.2 6.5a2 2 0 0 1-1.3 1.3L2 12l6.5 2.2a2 2 0 0 1 1.3 1.3L12 22l2.2-6.5a2 2 0 0 1 1.3-1.3L22 12l-6.5-2.2a2 2 0 0 1-1.3-1.3Z" fill="rgba(255,255,255,0.95)" stroke="#ffffff" stroke-width="1"/><circle cx="19" cy="5" r="1.5" fill="#ffffff"/><circle cx="5" cy="19" r="1" fill="#ffffff"/></g></svg>`;

// 4. Rocket / Score Booster SVG (Emerald Green)
const rocketSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rocket-bg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#047857"/><stop offset="100%" stop-color="#064E3B"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#rocket-bg)" stroke="rgba(52, 211, 153, 0.5)" stroke-width="1.5"/><g transform="translate(15, 12)"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" fill="rgba(255,255,255,0.9)"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="rgba(255,255,255,0.95)"/><circle cx="15.5" cy="8.5" r="1.5" fill="#10B981"/></g></svg>`;

// 5. Shield SVG (Cyan)
const shieldSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="shield-bg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#0E7490"/><stop offset="100%" stop-color="#164E63"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#shield-bg)" stroke="rgba(34, 211, 238, 0.5)" stroke-width="1.5"/><g transform="translate(15, 12)"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(255,255,255,0.25)" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="m9 12 2 2 4-4" stroke="#ffffff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></g></svg>`;

// Replace OpenAI ChatGPT (svg: ...)
js = js.replace(
  /svg:'<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http:\/\/www\.w3\.org\/2000\/svg"><rect width="54" height="54" rx="14" fill="#10A37F"[\s\S]*?<\/svg>'/,
  `svg:'${aiSvg}'`
);

// Replace Claude 'A*' (svg: ...)
js = js.replace(
  /svg:'<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http:\/\/www\.w3\.org\/2000\/svg"><rect width="54" height="54" rx="14" fill="#D97757"[\s\S]*?<\/svg>'/,
  `svg:'${bulbSvg}'`
);

// Replace Gemini star (svg: ...)
js = js.replace(
  /svg:'<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http:\/\/www\.w3\.org\/2000\/svg"><defs><linearGradient id="gemini-bg"[\s\S]*?<\/svg>'/,
  `svg:'${shieldSvg}'`
);

// Replace Meta AI (svg: ...)
js = js.replace(
  /svg:'<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http:\/\/www\.w3\.org\/2000\/svg"><defs><linearGradient id="meta-grad"[\s\S]*?<\/svg>'/,
  `svg:'${brainSvg}'`
);

// Replace Perplexity (svg: ...)
js = js.replace(
  /svg:'<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http:\/\/www\.w3\.org\/2000\/svg"><rect width="54" height="54" rx="14" fill="#0B1C24"[\s\S]*?<\/svg>'/,
  `svg:'${rocketSvg}'`
);

// Replace Grok (svg: ...)
js = js.replace(
  /svg:'<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http:\/\/www\.w3\.org\/2000\/svg"><rect width="54" height="54" rx="14" fill="#000000" stroke="rgba\(255, 255, 255, 0\.4\)" stroke-width="1\.5"[\s\S]*?<\/svg>'/,
  `svg:'${brainSvg}'`
);

// Update drop shadow filters
js = js.replace(/drop-shadow\(0px 0px 15px rgba\(16, 163, 127, 0\.9\)\)/g, 'drop-shadow(0px 0px 15px rgba(59, 130, 246, 0.95))');
js = js.replace(/drop-shadow\(0px 0px 15px rgba\(217, 119, 87, 0\.9\)\)/g, 'drop-shadow(0px 0px 15px rgba(245, 158, 11, 0.95))');
js = js.replace(/drop-shadow\(0px 0px 15px rgba\(78, 126, 247, 0\.9\)\)/g, 'drop-shadow(0px 0px 15px rgba(6, 182, 212, 0.95))');
js = js.replace(/drop-shadow\(0px 0px 15px rgba\(0, 129, 251, 0\.9\)\)/g, 'drop-shadow(0px 0px 15px rgba(139, 92, 246, 0.95))');
js = js.replace(/drop-shadow\(0px 0px 15px rgba\(32, 180, 204, 0\.9\)\)/g, 'drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.95))');

fs.writeFileSync(hxv7Path, js, 'utf8');
console.log('Successfully updated HXv7 with Brain, Lightbulb, AI Sparkles, Rocket Booster, and Shield icons!');
