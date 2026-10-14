const fs = require('fs');

const file = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
let content = fs.readFileSync(file, 'utf8');

// 1. Center Logomark (2) update to large 82x82
const centerSvg = `<svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="ur-orbit-clip-lg"><rect x="2" y="2" width="78" height="78" rx="20" fill="#fff"/></clipPath></defs><g clip-path="url(#ur-orbit-clip-lg)"><image href="/framerusercontent.com/images/ur_score_logo.png" x="2" y="2" width="78" height="78" preserveAspectRatio="xMidYMid meet"/></g><rect x="2" y="2" width="78" height="78" rx="20" stroke="rgba(59, 130, 246, 0.6)" stroke-width="2.5"/></svg>`;

const oldCenterStart = 'children:e(b,{className:"framer-1x6bsw4","data-framer-name":"Logomark (2)"';
const oldCenterEnd = 'withExternalLayout:!0})})';
const cIdxStart = content.indexOf(oldCenterStart);
const cIdxEnd = content.indexOf(oldCenterEnd, cIdxStart);

if (cIdxStart !== -1 && cIdxEnd !== -1) {
  const newCenter = `children:e(b,{className:"framer-1x6bsw4","data-framer-name":"Logomark (2)",fill:"black",intrinsicHeight:82,intrinsicWidth:82,layoutDependency:a,layoutId:"q_xaSYk6Q",style:{filter:"drop-shadow(0px 0px 22px rgba(37, 99, 235, 0.95))",WebkitFilter:"drop-shadow(0px 0px 22px rgba(37, 99, 235, 0.95))"},svg:'${centerSvg}',withExternalLayout:!0})})`;
  content = content.slice(0, cIdxStart) + newCenter + content.slice(cIdxEnd + oldCenterEnd.length);
  console.log('Center logo updated to 82x82 with vibrant blue glow!');
} else {
  console.error('Could not find center logo chunk!');
}

// 2. OpenAI / ChatGPT (replaces Eclipseful)
const openAiSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="54" rx="14" fill="#10A37F"/><path d="M38.5 25.4a6.3 6.3 0 0 0-.5-4.4 6.5 6.5 0 0 0-4.6-3.3 6.3 6.3 0 0 0-5.1.7 6.4 6.4 0 0 0-4.2-1.9 6.4 6.4 0 0 0-6.1 4.4 6.4 6.4 0 0 0-3.6 2.6 6.3 6.3 0 0 0-.5 5.1 6.5 6.5 0 0 0 .5 4.4 6.5 6.5 0 0 0 4.6 3.3 6.3 6.3 0 0 0 5.1-.7 6.4 6.4 0 0 0 4.2 1.9 6.4 6.4 0 0 0 6.1-4.4 6.4 6.4 0 0 0 3.6-2.6 6.3 6.3 0 0 0 .5-5.1zm-13.6 9.4a4.4 4.4 0 0 1-2.7-1l3.5-2a.9.9 0 0 0 .5-.8v-4.9l1.5.9v4.2a4.4 4.4 0 0 1-2.8 3.6zm-8.2-4.1a4.3 4.3 0 0 1-.5-2.9l3.5 2a.9.9 0 0 0 .9 0l4.2-2.5v1.7l-3.6 2.1a4.4 4.4 0 0 1-4.5-.4zm-1.1-9.1c.5-.9 1.4-1.5 2.4-1.9v4a.9.9 0 0 0 .4.8l4.2 2.4-1.5.9-3.6-2.1a4.4 4.4 0 0 1-1.9-4.1zm13.7-2.3l-3.5 2a.9.9 0 0 0-.5.8v4.9l-1.5-.9v-4.2a4.4 4.4 0 0 1 5.5-2.6zm3.5 3.1c.9.5 1.6 1.3 2 2.2l-3.5-2a.9.9 0 0 0-.9 0l-4.2 2.5V23l3.6-2.1a4.4 4.4 0 0 1 3 1.5zm.9 8.2a4.4 4.4 0 0 1-2.4 1.9v-4a.9.9 0 0 0-.4-.8l-4.2-2.4 1.5-.9 3.6 2.1a4.4 4.4 0 0 1 1.9 4.1zm-7.6-1.7l-2.2-1.3 2.2-1.3 2.2 1.3-2.2 1.3z" fill="#FFFFFF"/></svg>`;
content = content.replace(
  /"data-framer-name":"Eclipseful",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"hqyQkMHUR",style:\{filter:"drop-shadow\(0px 0px 11px rgb\(222, 42, 147\)\)",WebkitFilter:"drop-shadow\(0px 0px 11px rgb\(222, 42, 147\)\)"\},svg:'<svg width="54" height="54"[^']*'/,
  `"data-framer-name":"OpenAI ChatGPT",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"hqyQkMHUR",style:{filter:"drop-shadow(0px 0px 15px rgba(16, 163, 127, 0.9))",WebkitFilter:"drop-shadow(0px 0px 15px rgba(16, 163, 127, 0.9))"},svg:'${openAiSvg}'`
);

// 3. Claude Anthropic (replaces Boltshift)
const claudeSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="54" rx="14" fill="#D97757"/><path d="M28.4 15h-2.8l-7.6 24h3.6l1.7-5.4h7.4l1.7 5.4h3.6l-7.6-24zm-4.1 15.6l2.7-8.7 2.7 8.7h-5.4z" fill="#FFF7ED"/><circle cx="37" cy="18" r="3" fill="#FFF7ED"/></svg>`;
content = content.replace(
  /"data-framer-name":"Boltshift",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"Kz3OYArss",style:\{filter:"drop-shadow\(0px 0px 11px rgb\(33, 102, 239\)\)",WebkitFilter:"drop-shadow\(0px 0px 11px rgb\(33, 102, 239\)\)"\},svg:'<svg width="54" height="54"[^']*'/,
  `"data-framer-name":"Anthropic Claude",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"Kz3OYArss",style:{filter:"drop-shadow(0px 0px 15px rgba(217, 119, 87, 0.9))",WebkitFilter:"drop-shadow(0px 0px 15px rgba(217, 119, 87, 0.9))"},svg:'${claudeSvg}'`
);

// 4. Google Gemini (replaces Clandestine)
const geminiSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gemini-bg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#1B1F3B"/><stop offset="100%" stop-color="#0E1326"/></linearGradient><linearGradient id="gemini-star" x1="14" y1="14" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#4E7EF7"/><stop offset="50%" stop-color="#9C52FF"/><stop offset="100%" stop-color="#FF6B8B"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#gemini-bg)" stroke="rgba(78, 126, 247, 0.5)" stroke-width="1.5"/><path d="M27 12c.5 7.8 7.2 14.5 15 15-7.8.5-14.5 7.2-15 15-.5-7.8-7.2-14.5-15-15 7.8-.5 14.5-7.2 15-15z" fill="url(#gemini-star)"/></svg>`;
content = content.replace(
  /"data-framer-name":"Clandestine",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"qMiifhjnD",style:\{filter:"drop-shadow\(0px 0px 11px rgb\(27, 181, 104\)\)",WebkitFilter:"drop-shadow\(0px 0px 11px rgb\(27, 181, 104\)\)"\},svg:'<svg width="54" height="54"[^']*'/,
  `"data-framer-name":"Google Gemini",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"qMiifhjnD",style:{filter:"drop-shadow(0px 0px 15px rgba(78, 126, 247, 0.9))",WebkitFilter:"drop-shadow(0px 0px 15px rgba(78, 126, 247, 0.9))"},svg:'${geminiSvg}'`
);

// 5. Meta AI / Llama (replaces BuildingBlocks)
const metaSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="meta-grad" x1="10" y1="27" x2="44" y2="27" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#0064E0"/><stop offset="50%" stop-color="#0081FB"/><stop offset="100%" stop-color="#00A9FF"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="#0D1527" stroke="rgba(0, 129, 251, 0.5)" stroke-width="1.5"/><path d="M37.8 20.8c-2.4 0-4.6 1.4-6.1 3.5-1.5-2.1-3.7-3.5-6.1-3.5-4.2 0-7.6 3.5-7.6 7.7s3.4 7.7 7.6 7.7c2.4 0 4.6-1.4 6.1-3.5 1.5 2.1 3.7 3.5 6.1 3.5 4.2 0 7.6-3.5 7.6-7.7s-3.4-7.7-7.6-7.7zm-12.2 12c-2.5 0-4.5-2-4.5-4.3s2-4.3 4.5-4.3 4.2 2 4.2 4.3-1.7 4.3-4.2 4.3zm12.2 0c-2.5 0-4.2-2-4.2-4.3s1.7-4.3 4.2-4.3 4.5 2 4.5 4.3-2 4.3-4.5 4.3z" fill="url(#meta-grad)"/></svg>`;
content = content.replace(
  /"data-framer-name":"BuildingBlocks",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"X3PVDy4vF",style:\{filter:"drop-shadow\(0px 0px 11px rgb\(255, 72, 11\)\)",WebkitFilter:"drop-shadow\(0px 0px 11px rgb\(255, 72, 11\)\)"\},svg:'<svg width="54" height="54"[^']*'/,
  `"data-framer-name":"Meta AI",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"X3PVDy4vF",style:{filter:"drop-shadow(0px 0px 15px rgba(0, 129, 251, 0.9))",WebkitFilter:"drop-shadow(0px 0px 15px rgba(0, 129, 251, 0.9))"},svg:'${metaSvg}'`
);

// 6. Perplexity AI (replaces ContrastAI)
const perplexitySvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="54" height="54" rx="14" fill="#0B1C24" stroke="rgba(32, 180, 204, 0.5)" stroke-width="1.5"/><path d="M27 14v26M18 19l18 16M36 19L18 35" stroke="#20B4CC" stroke-width="3.5" stroke-linecap="round"/><circle cx="27" cy="27" r="4.5" fill="#20B4CC"/></svg>`;
content = content.replace(
  /"data-framer-name":"ContrastAI",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"iLpYj8eQY",style:\{filter:"drop-shadow\(0px 0px 11px rgb\(92, 53, 191\)\)",WebkitFilter:"drop-shadow\(0px 0px 11px rgb\(92, 53, 191\)\)"\},svg:'<svg width="54" height="54"[^']*'/,
  `"data-framer-name":"Perplexity AI",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"iLpYj8eQY",style:{filter:"drop-shadow(0px 0px 15px rgba(32, 180, 204, 0.9))",WebkitFilter:"drop-shadow(0px 0px 15px rgba(32, 180, 204, 0.9))"},svg:'${perplexitySvg}'`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated all AI orbit apps in HXv7!');
