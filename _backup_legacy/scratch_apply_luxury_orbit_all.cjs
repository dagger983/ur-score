const fs = require('fs');

// 1. BRAIN SVG (Top-Left) - Deep Amethyst / Royal Violet (Boosted Scale 33px)
const brainSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="brain-grad-lux" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#8B5CF6"/><stop offset="100%" stop-color="#581C87"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#brain-grad-lux)" stroke="rgba(216, 180, 254, 0.45)" stroke-width="1.5"/><g transform="translate(10.5, 10.5) scale(1.38)" fill="rgba(255,255,255,0.18)" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" fill="none"/><path d="M12 18v3" fill="none"/></g></svg>`;

// 2. LIGHTBULB SVG (Top-Right) - Rich Warm Amber / Gold (Boosted Scale 33px)
const bulbSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bulb-grad-lux" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#F59E0B"/><stop offset="100%" stop-color="#B45309"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#bulb-grad-lux)" stroke="rgba(253, 230, 138, 0.45)" stroke-width="1.5"/><g transform="translate(10.5, 10.5) scale(1.38)" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" fill="rgba(255,255,255,0.22)"/><path d="M9 18h6" fill="none"/><path d="M10 21h4" fill="none"/></g></svg>`;

// 3. OPENAI / CHATGPT SVG (Center-Right) - Authentic OpenAI Swirl (Boosted Scale 31px)
const openAiSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="openai-grad-lux" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#10B981"/><stop offset="100%" stop-color="#047857"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#openai-grad-lux)" stroke="rgba(167, 243, 208, 0.45)" stroke-width="1.5"/><g transform="translate(27, 27) scale(1.34) translate(-27, -27)"><path d="M38.5 25.4a6.3 6.3 0 0 0-.5-4.4 6.5 6.5 0 0 0-4.6-3.3 6.3 6.3 0 0 0-5.1.7 6.4 6.4 0 0 0-4.2-1.9 6.4 6.4 0 0 0-6.1 4.4 6.4 6.4 0 0 0-3.6 2.6 6.3 6.3 0 0 0-.5 5.1 6.5 6.5 0 0 0 .5 4.4 6.5 6.5 0 0 0 4.6 3.3 6.3 6.3 0 0 0 5.1-.7 6.4 6.4 0 0 0 4.2 1.9 6.4 6.4 0 0 0 6.1-4.4 6.4 6.4 0 0 0 3.6-2.6 6.3 6.3 0 0 0 .5-5.1zm-13.6 9.4a4.4 4.4 0 0 1-2.7-1l3.5-2a.9.9 0 0 0 .5-.8v-4.9l1.5.9v4.2a4.4 4.4 0 0 1-2.8 3.6zm-8.2-4.1a4.3 4.3 0 0 1-.5-2.9l3.5 2a.9.9 0 0 0 .9 0l4.2-2.5v1.7l-3.6 2.1a4.4 4.4 0 0 1-4.5-.4zm-1.1-9.1c.5-.9 1.4-1.5 2.4-1.9v4a.9.9 0 0 0 .4.8l4.2 2.4-1.5.9-3.6-2.1a4.4 4.4 0 0 1-1.9-4.1zm13.7-2.3l-3.5 2a.9.9 0 0 0-.5.8v4.9l-1.5-.9v-4.2a4.4 4.4 0 0 1 5.5-2.6zm3.5 3.1c.9.5 1.6 1.3 2 2.2l-3.5-2a.9.9 0 0 0-.9 0l-4.2 2.5V23l3.6-2.1a4.4 4.4 0 0 1 3 1.5zm.9 8.2a4.4 4.4 0 0 1-2.4 1.9v-4a.9.9 0 0 0-.4-.8l-4.2-2.4 1.5-.9 3.6 2.1a4.4 4.4 0 0 1 1.9 4.1zm-7.6-1.7l-2.2-1.3 2.2-1.3 2.2 1.3-2.2 1.3z" fill="#FFFFFF"/></g></svg>`;

// 4. ROCKET / SCORE BOOSTER SVG (Bottom-Right) - Deep Forest / Emerald (Boosted Scale 33px)
const rocketSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rocket-grad-lux" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#064E3B"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#rocket-grad-lux)" stroke="rgba(110, 231, 183, 0.45)" stroke-width="1.5"/><g transform="translate(10.5, 10.5) scale(1.38)" fill="rgba(255,255,255,0.22)" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" fill="none"/><path d="M12 9v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" fill="none"/></g></svg>`;

// 5. SHIELD / PROTECTION SVG (Bottom-Left) - Deep Electric Cyan / Ocean (Boosted Scale 33px)
const shieldSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="shield-grad-lux" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#0891B2"/><stop offset="100%" stop-color="#164E63"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#shield-grad-lux)" stroke="rgba(165, 243, 252, 0.45)" stroke-width="1.5"/><g transform="translate(10.5, 10.5) scale(1.38)" stroke="#FFFFFF" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(255,255,255,0.2)"/><path d="m9 12 2 2 4-4" fill="none" stroke-width="2.6"/></g></svg>`;

// 6. CENTER UR SCORE BADGE (Center) - Radiant Glowing Jewel Badge
const centerSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><radialGradient id="ur-orbit-center-grad-lux" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#38bdf8"/><stop offset="40%" stop-color="#0284c7"/><stop offset="75%" stop-color="#1e3a8a"/><stop offset="100%" stop-color="#020617"/></radialGradient><clipPath id="ur-orbit-circle-clip-lux"><circle cx="27" cy="27" r="23"/></clipPath></defs><circle cx="27" cy="27" r="23" fill="url(#ur-orbit-center-grad-lux)"/><circle cx="27" cy="27" r="23" stroke="#00e5ff" stroke-width="2" opacity="0.95"/><g clip-path="url(#ur-orbit-circle-clip-lux)"><image href="/framerusercontent.com/images/ur_score_logo.png" x="8" y="8" width="38" height="38" preserveAspectRatio="xMidYMid meet"/></g></svg>`;


// =========================================================================
// PART A: Update HXv7 (Client-side Framer bundle)
// =========================================================================
const hxv7Path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
let js = fs.readFileSync(hxv7Path, 'utf8');

js = js.replace(
  /("data-framer-name":"Meta AI"[^}]*?style:\{)[^}]*?(\},svg:')<svg[^']*?'/,
  `$1filter:"drop-shadow(0px 0px 18px rgba(139, 92, 246, 0.95))",WebkitFilter:"drop-shadow(0px 0px 18px rgba(139, 92, 246, 0.95))"$2${brainSvg}'`
);

js = js.replace(
  /("data-framer-name":"Anthropic Claude"[^}]*?style:\{)[^}]*?(\},svg:')<svg[^']*?'/,
  `$1filter:"drop-shadow(0px 0px 18px rgba(245, 158, 11, 0.95))",WebkitFilter:"drop-shadow(0px 0px 18px rgba(245, 158, 11, 0.95))"$2${bulbSvg}'`
);

js = js.replace(
  /("data-framer-name":"OpenAI ChatGPT"[^}]*?style:\{)[^}]*?(\},svg:')<svg[^']*?'/,
  `$1filter:"drop-shadow(0px 0px 18px rgba(16, 185, 129, 0.95))",WebkitFilter:"drop-shadow(0px 0px 18px rgba(16, 185, 129, 0.95))"$2${openAiSvg}'`
);

js = js.replace(
  /("data-framer-name":"Perplexity AI"[^}]*?style:\{)[^}]*?(\},svg:')<svg[^']*?'/,
  `$1filter:"drop-shadow(0px 0px 18px rgba(16, 185, 129, 0.95))",WebkitFilter:"drop-shadow(0px 0px 18px rgba(16, 185, 129, 0.95))"$2${rocketSvg}'`
);

js = js.replace(
  /("data-framer-name":"Google Gemini"[^}]*?style:\{)[^}]*?(\},svg:')<svg[^']*?'/,
  `$1filter:"drop-shadow(0px 0px 18px rgba(6, 182, 212, 0.95))",WebkitFilter:"drop-shadow(0px 0px 18px rgba(6, 182, 212, 0.95))"$2${shieldSvg}'`
);

js = js.replace(
  /("data-framer-name":"UR Score Logo"[^}]*?style:\{)[^}]*?(\},svg:')<svg[^']*?'/,
  `$1filter:"drop-shadow(0px 0px 18px rgba(0, 229, 255, 0.95))",WebkitFilter:"drop-shadow(0px 0px 18px rgba(0, 229, 255, 0.95))"$2${centerSvg}'`
);

fs.writeFileSync(hxv7Path, js, 'utf8');
console.log('Successfully updated HXv7 with boosted luxury icons!');


// =========================================================================
// PART B: Update features.html and features/index.html (SSR SVG templates)
// =========================================================================
const htmlFiles = [
  'payer_clone/payer.framer.website/features.html',
  'payer_clone/payer.framer.website/features/index.html'
];

for (const f of htmlFiles) {
  let html = fs.readFileSync(f, 'utf8');

  function replaceSvgTemplate(id, newSvgContent) {
    const withId = newSvgContent.replace('<svg ', `<svg id="${id}" `);
    const regex = new RegExp('<svg[^>]*id="' + id + '"[\\s\\S]*?<\\/svg>');
    if (regex.test(html)) {
      html = html.replace(regex, withId);
    }
  }

  replaceSvgTemplate('svg-1796426772_4257', brainSvg);
  replaceSvgTemplate('svg-1880125910_4413', bulbSvg);
  replaceSvgTemplate('svg562521627_4399', openAiSvg);
  replaceSvgTemplate('svg656287312_4184', rocketSvg);
  replaceSvgTemplate('svg-457599713_4727', shieldSvg);

  const centerTemplateSvg = `<svg width="40" height="40" viewBox="0 0 54 54" fill="none" id="svg-2139612630_280" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><radialGradient id="ur-orbit-center-grad-ssr" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#38bdf8"/><stop offset="40%" stop-color="#0284c7"/><stop offset="75%" stop-color="#1e3a8a"/><stop offset="100%" stop-color="#020617"/></radialGradient><clipPath id="ur-orbit-circle-clip-ssr"><circle cx="27" cy="27" r="23"/></clipPath></defs><circle cx="27" cy="27" r="23" fill="url(#ur-orbit-center-grad-ssr)"/><circle cx="27" cy="27" r="23" stroke="#00e5ff" stroke-width="2" opacity="0.95"/><g clip-path="url(#ur-orbit-circle-clip-ssr)"><image href="/framerusercontent.com/images/ur_score_logo.png" x="8" y="8" width="38" height="38" preserveAspectRatio="xMidYMid meet"/></g></svg>`;
  const centerRegex = /<svg[^>]*id="svg-2139612630_280"[\s\S]*?<\/svg>/;
  if (centerRegex.test(html)) {
    html = html.replace(centerRegex, centerTemplateSvg);
  }

  fs.writeFileSync(f, html, 'utf8');
  console.log('Updated HTML file:', f);
}
