const fs = require('fs');

const hxv7Path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
let js = fs.readFileSync(hxv7Path, 'utf8');

// 1. Brain SVG (Deep Cognitive Intelligence) - 54x54
const brainSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="brain-bg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#581C87"/><stop offset="100%" stop-color="#2E1065"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#brain-bg)" stroke="rgba(168, 85, 247, 0.6)" stroke-width="1.5"/><g fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M26 14c-2.5-2.5-6-2.5-8.5-1a6.5 6.5 0 0 0-4.5 7.5 5.5 5.5 0 0 0-1 6.5 6 6 0 0 0 3 7 5.5 5.5 0 0 0 5 4.5 5.5 5.5 0 0 0 6-3.5" fill="rgba(255,255,255,0.18)"/><path d="M21 21c-2 0-4 1.5-4 3.5s2 3.5 4 3.5"/><path d="M26 27c-2.5 0-4.5 1.5-4.5 3.5"/><path d="M28 14c2.5-2.5 6-2.5 8.5-1a6.5 6.5 0 0 1 4.5 7.5 5.5 5.5 0 0 1 1 6.5 6 6 0 0 1-3 7 5.5 5.5 0 0 1-5 4.5 5.5 5.5 0 0 1-6-3.5" fill="rgba(255,255,255,0.18)"/><path d="M33 21c2 0 4 1.5 4 3.5s-2 3.5-4 3.5"/><path d="M28 27c2.5 0 4.5 1.5 4.5 3.5"/><line x1="27" y1="13" x2="27" y2="41" stroke-width="1.8"/></g></svg>`;

// 2. Lightbulb SVG (Clever Insights & Foresight) - 54x54
const bulbSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bulb-bg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#B45309"/><stop offset="100%" stop-color="#78350F"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#bulb-bg)" stroke="rgba(251, 191, 36, 0.6)" stroke-width="1.5"/><g stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"><line x1="27" y1="10" x2="27" y2="13" stroke-width="2.5"/><line x1="16" y1="16" x2="18.5" y2="18.5" stroke-width="2"/><line x1="38" y1="16" x2="35.5" y2="18.5" stroke-width="2"/><path d="M20 25c0-4 3.1-7.5 7-7.5s7 3.5 7 7.5c0 3-1.8 5.5-3.5 7.5-.7.8-1.5 1.8-1.5 3.5h-4c0-1.7-.8-2.7-1.5-3.5C21.8 30.5 20 28 20 25z" fill="rgba(255,255,255,0.22)" stroke-width="2.2"/><path d="M24 38.5h6M24.8 41.5h4.4" stroke-width="2.2"/><line x1="25.5" y1="26" x2="28.5" y2="26" stroke-width="1.8"/><path d="M25 29l2-3 2 3" fill="none" stroke-width="1.5"/></g></svg>`;

// 3. Single AI Icon - AI Sparkles (Electric Blue) - 54x54
const aiSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ai-bg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#2563EB"/><stop offset="100%" stop-color="#1E3A8A"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#ai-bg)" stroke="rgba(96, 165, 250, 0.6)" stroke-width="1.5"/><g fill="#FFFFFF" stroke="#FFFFFF" stroke-linejoin="round"><path d="M27 12c.5 6 3 8.5 9 9-6 .5-8.5 3-9 9-.5-6-3-8.5-9-9 6-.5 8.5-3 9-9z" stroke-width="1.5"/><path d="M38 13c.2 2.5 1.3 3.6 3.8 3.8-2.5.2-3.6 1.3-3.8 3.8-.2-2.5-1.3-3.6-3.8-3.8 2.5-.2 3.6-1.3 3.8-3.8z" stroke-width="0.8"/><path d="M15 33c.2 2 1 2.8 3 3-2 .2-2.8 1-3 3-.2-2-1-2.8-3-3 2-.2 2.8-1 3-3z" stroke-width="0.8"/></g></svg>`;

// 4. Rocket Booster (Growth Engine) - 54x54
const rocketSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="rocket-bg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#064E3B"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#rocket-bg)" stroke="rgba(52, 211, 153, 0.6)" stroke-width="1.5"/><g stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"><path d="M37 17c-5.5.5-11.5 4.5-14.5 9.5l4 4c5-3 9-9 9.5-14.5l1 1z" fill="rgba(255,255,255,0.9)" stroke-width="1.8"/><circle cx="33" cy="21" r="2.2" fill="#059669" stroke="none"/><path d="M22.5 26.5l-4.5 2 2 4.5 3.5-1.5" fill="rgba(255,255,255,0.7)" stroke-width="1.8"/><path d="M27.5 31.5l-1.5 3.5 4.5 2 2-4.5" fill="rgba(255,255,255,0.7)" stroke-width="1.8"/><path d="M21 33l-4 4c-.8.8-1.5 2.5-1.5 2.5s1.7-.7 2.5-1.5l4-4" stroke="#F59E0B" stroke-width="2.5" fill="#EF4444"/><line x1="18.5" y1="38.5" x2="14" y2="43" stroke="#F59E0B" stroke-width="2.5"/></g></svg>`;

// 5. Shield (Bank-grade Security) - 54x54
const shieldSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="shield-bg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse"><stop offset="0%" stop-color="#0891B2"/><stop offset="100%" stop-color="#164E63"/></linearGradient></defs><rect width="54" height="54" rx="14" fill="url(#shield-bg)" stroke="rgba(34, 211, 238, 0.6)" stroke-width="1.5"/><g stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"><path d="M27 41s11-5.5 11-13.5v-9.5l-11-4-11 4v9.5c0 8 11 13.5 11 13.5z" fill="rgba(255,255,255,0.22)" stroke-width="2.2"/><path d="M22 27.5l3.5 3.5 7-7" stroke-width="2.6" fill="none"/></g></svg>`;

// 6. UR Score Center Badge - 54x54
const centerSvg = `<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><radialGradient id="ur-orbit-center-grad" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#38bdf8"/><stop offset="40%" stop-color="#0284c7"/><stop offset="75%" stop-color="#1e3a8a"/><stop offset="100%" stop-color="#020617"/></radialGradient><clipPath id="ur-orbit-circle-clip"><circle cx="27" cy="27" r="25"/></clipPath></defs><circle cx="27" cy="27" r="25" fill="url(#ur-orbit-center-grad)"/><circle cx="27" cy="27" r="25" stroke="#00e5ff" stroke-width="2" opacity="0.95"/><g clip-path="url(#ur-orbit-circle-clip)"><image href="/framerusercontent.com/images/ur_score_logo.png" x="7" y="7" width="40" height="40" preserveAspectRatio="xMidYMid meet"/></g></svg>`;

// Replace OpenAI ChatGPT (svg: ...) -> aiSvg
js = js.replace(
  /className:"framer-1gw9zgr","data-framer-name":"OpenAI ChatGPT"[\s\S]*?svg:'<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http:\/\/www\.w3\.org\/2000\/svg">[\s\S]*?<\/svg>'/,
  `className:"framer-1gw9zgr","data-framer-name":"OpenAI ChatGPT",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"hqyQkMHUR",style:{filter:"drop-shadow(0px 0px 15px rgba(59, 130, 246, 0.95))",WebkitFilter:"drop-shadow(0px 0px 15px rgba(59, 130, 246, 0.95))"},svg:'${aiSvg}'`
);

// Replace Claude 'A*' (svg: ...) -> bulbSvg
js = js.replace(
  /className:"framer-v81xmt","data-framer-name":"Anthropic Claude"[\s\S]*?svg:'<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http:\/\/www\.w3\.org\/2000\/svg">[\s\S]*?<\/svg>'/,
  `className:"framer-v81xmt","data-framer-name":"Anthropic Claude",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"Kz3OYArss",style:{filter:"drop-shadow(0px 0px 15px rgba(245, 158, 11, 0.95))",WebkitFilter:"drop-shadow(0px 0px 15px rgba(245, 158, 11, 0.95))"},svg:'${bulbSvg}'`
);

// Replace Gemini star (svg: ...) -> shieldSvg
js = js.replace(
  /className:"framer-3qyphv","data-framer-name":"Google Gemini"[\s\S]*?svg:'<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http:\/\/www\.w3\.org\/2000\/svg">[\s\S]*?<\/svg>'/,
  `className:"framer-3qyphv","data-framer-name":"Google Gemini",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"qMiifhjnD",style:{filter:"drop-shadow(0px 0px 15px rgba(6, 182, 212, 0.95))",WebkitFilter:"drop-shadow(0px 0px 15px rgba(6, 182, 212, 0.95))"},svg:'${shieldSvg}'`
);

// Replace Meta AI (svg: ...) -> brainSvg
js = js.replace(
  /className:"framer-1sm92e7","data-framer-name":"Meta AI"[\s\S]*?svg:'<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http:\/\/www\.w3\.org\/2000\/svg">[\s\S]*?<\/svg>'/,
  `className:"framer-1sm92e7","data-framer-name":"Meta AI",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"X3PVDy4vF",style:{filter:"drop-shadow(0px 0px 15px rgba(139, 92, 246, 0.95))",WebkitFilter:"drop-shadow(0px 0px 15px rgba(139, 92, 246, 0.95))"},svg:'${brainSvg}'`
);

// Replace Perplexity (svg: ...) -> rocketSvg
js = js.replace(
  /className:"framer-18mahne","data-framer-name":"Perplexity AI"[\s\S]*?svg:'<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http:\/\/www\.w3\.org\/2000\/svg">[\s\S]*?<\/svg>'/,
  `className:"framer-18mahne","data-framer-name":"Perplexity AI",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"iLpYj8eQY",style:{filter:"drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.95))",WebkitFilter:"drop-shadow(0px 0px 15px rgba(16, 185, 129, 0.95))"},svg:'${rocketSvg}'`
);

// Replace Center UR Score Logo:
js = js.replace(
  /className:"framer-jowe18"[\s\S]*?width:90,height:90,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10\},children:e\(b,\{className:"framer-u67xta framer-rtz2tb","data-framer-name":"UR Score Logo",fill:"black",intrinsicHeight:90,intrinsicWidth:90,layoutDependency:a,layoutId:"vXZ9NPUsb",style:\{filter:"drop-shadow\(0px 0px 30px rgba\(0, 220, 255, 0\.95\)\) drop-shadow\(0px 0px 50px rgba\(0, 102, 255, 0\.6\)\)",WebkitFilter:"drop-shadow\(0px 0px 30px rgba\(0, 220, 255, 0\.95\)\) drop-shadow\(0px 0px 50px rgba\(0, 102, 255, 0\.6\)\)"\},svg:'<svg width="90" height="90"[\s\S]*?<\/svg>'/,
  `className:"framer-jowe18","data-border":!0,"data-framer-name":"App Icon",layoutDependency:a,layoutId:"hpjraIDcn",style:{"--border-bottom-width":"0px","--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px",backdropFilter:"blur(12px)",background:"transparent",borderRadius:"50%",borderBottomLeftRadius:"50%",borderBottomRightRadius:"50%",borderTopLeftRadius:"50%",borderTopRightRadius:"50%",WebkitBackdropFilter:"blur(12px)",width:54,height:54,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10},children:e(b,{className:"framer-u67xta framer-rtz2tb","data-framer-name":"UR Score Logo",fill:"black",intrinsicHeight:54,intrinsicWidth:54,layoutDependency:a,layoutId:"vXZ9NPUsb",style:{filter:"drop-shadow(0px 0px 18px rgba(0, 229, 255, 0.95))",WebkitFilter:"drop-shadow(0px 0px 18px rgba(0, 229, 255, 0.95))"},svg:'${centerSvg}'`
);

fs.writeFileSync(hxv7Path, js, 'utf8');
console.log('Successfully updated HXv7 with crisp, high-visibility Brain, Bulb, AI Sparkles, Rocket Booster, Shield & UR Center badge!');
