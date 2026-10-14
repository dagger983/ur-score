const fs = require('fs');

const filePath = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs';
let content = fs.readFileSync(filePath + '.bak', 'utf8');

// 1. Start Screen
const startScreenStyleTarget = 'layoutId:"BYt05tkJv",style:{backgroundColor:"rgb(16, 16, 14)",borderBottomLeftRadius:32,borderBottomRightRadius:32,borderTopLeftRadius:32,borderTopRightRadius:32}';
const startScreenStyleReplacement = 'layoutId:"BYt05tkJv",style:{backgroundColor:"rgb(16, 16, 14)",borderBottomLeftRadius:32,borderBottomRightRadius:32,borderTopLeftRadius:32,borderTopRightRadius:32,backgroundImage:"url(\'../framerusercontent.com/images/enhanced_screen_1_know_your_score.png\')",backgroundSize:"cover",backgroundPosition:"center"}';
content = content.replace(startScreenStyleTarget, startScreenStyleReplacement);

const startStatusBarTarget = 'layoutId:"PnCRya7F8",style:{backgroundColor:"rgb(16, 16, 14)"}';
const startStatusBarReplacement = 'layoutId:"PnCRya7F8",style:{backgroundColor:"transparent",position:"relative",zIndex:2}';
content = content.replace(startStatusBarTarget, startStatusBarReplacement);

const startScreenIdx = content.indexOf('layoutId:"BYt05tkJv"');
const statusBarEnd = content.indexOf('withExternalLayout:!0})]})', startScreenIdx) + 'withExternalLayout:!0})]})'.length;
const homeMarker = ',o(r.div,{className:"framer-p7nyl6","data-framer-name":"Home Screen"';
const homeScreenIdx = content.indexOf(homeMarker);

content = content.slice(0, statusBarEnd) + ']})' + content.slice(homeScreenIdx);

// 2. Home Screen
const homeScreenStyleTarget = 'layoutId:"m1JmsPrk6",style:{backgroundColor:"rgb(16, 16, 14)",borderBottomLeftRadius:32,borderBottomRightRadius:32,borderTopLeftRadius:32,borderTopRightRadius:32}';
const homeScreenStyleReplacement = 'layoutId:"m1JmsPrk6",style:{backgroundColor:"rgb(16, 16, 14)",borderBottomLeftRadius:32,borderBottomRightRadius:32,borderTopLeftRadius:32,borderTopRightRadius:32,backgroundImage:"url(\'../framerusercontent.com/images/enhanced_screen_2_understand_credit.png\')",backgroundSize:"cover",backgroundPosition:"center"}';
content = content.replace(homeScreenStyleTarget, homeScreenStyleReplacement);

const homeStatusBarTarget = 'layoutId:"cokQYy0IH",style:{backgroundColor:"rgb(16, 16, 14)"}';
const homeStatusBarReplacement = 'layoutId:"cokQYy0IH",style:{backgroundColor:"transparent",position:"relative",zIndex:2}';
content = content.replace(homeStatusBarTarget, homeStatusBarReplacement);

const newHomeIdx = content.indexOf('layoutId:"m1JmsPrk6"');
const homeStatusEnd = content.indexOf('withExternalLayout:!0})]})', newHomeIdx) + 'withExternalLayout:!0})]})'.length;
const payMarker = ',o(r.div,{className:"framer-1ujhebw","data-framer-name":"Payment Screen"';
const payScreenIdx = content.indexOf(payMarker);

content = content.slice(0, homeStatusEnd) + ']})' + content.slice(payScreenIdx);

// 3. Payment Screen
const payScreenStyleTarget = 'layoutId:"fgYg2A_C_",style:{backgroundColor:"rgb(16, 16, 14)",borderBottomLeftRadius:32,borderBottomRightRadius:32,borderTopLeftRadius:32,borderTopRightRadius:32}';
const payScreenStyleReplacement = 'layoutId:"fgYg2A_C_",style:{backgroundColor:"rgb(16, 16, 14)",borderBottomLeftRadius:32,borderBottomRightRadius:32,borderTopLeftRadius:32,borderTopRightRadius:32,backgroundImage:"url(\'../framerusercontent.com/images/enhanced_screen_3_improve_with_plan.png\')",backgroundSize:"cover",backgroundPosition:"center"}';
content = content.replace(payScreenStyleTarget, payScreenStyleReplacement);

const payStatusBarTarget = 'layoutId:"ZzWqJhtfK",style:{backgroundColor:"rgb(16, 16, 14)"}';
const payStatusBarReplacement = 'layoutId:"ZzWqJhtfK",style:{backgroundColor:"transparent",position:"relative",zIndex:2}';
content = content.replace(payStatusBarTarget, payStatusBarReplacement);

const newPayIdx = content.indexOf('layoutId:"fgYg2A_C_"');
const payStatusEnd = content.indexOf('withExternalLayout:!0})]})', newPayIdx) + 'withExternalLayout:!0})]})'.length;
const ctMarker = ',Ct=["@supports';
const ctIdx = content.indexOf(ctMarker);

// Exact closing string: ]}) ] }) }) }) }) })
content = content.slice(0, payStatusEnd) + ']})]})})})})})' + content.slice(ctIdx);

// 4. Update status bar colors to dark slate (#0f172a)
content = content.replace(/stroke="white"/g, 'stroke="#0f172a"');
content = content.replace(/fill="white"/g, 'fill="#0f172a"');
content = content.replace(/--extracted-r6o4lv":"rgb\(255, 255, 255\)"/g, '--extracted-r6o4lv":"rgb(15, 23, 42)"');

fs.writeFileSync(filePath, content);
console.log('Saved 5b4b.mjs');

let stack = [];
for (let i = 0; i < content.length; i++) {
  const ch = content[i];
  if (ch === '(' || ch === '[' || ch === '{') {
    stack.push({ ch, pos: i });
  } else if (ch === ')' || ch === ']' || ch === '}') {
    const last = stack.pop();
    const matching = { ')': '(', ']': '[', '}': '{' };
    if (!last || last.ch !== matching[ch]) {
      console.error(`Mismatched bracket at pos ${i}: found ${ch}, expected ${matching[ch]} for ${last ? last.ch : 'none'} from pos ${last ? last.pos : 'none'}`);
      console.error(content.slice(Math.max(0, i - 50), i + 50));
      process.exit(1);
    }
  }
}
console.log('ALL BRACKETS PERFECTLY BALANCED! Unclosed count:', stack.length);
