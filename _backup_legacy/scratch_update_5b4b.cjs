const fs = require('fs');

const filePath = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/5B4BfDVntgpQCZlNFHO8624ZKdZGtx0vfI6FemgB1zY.Z7KUKJAD.mjs';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Start Screen
// Add backgroundImage to Start Screen style
const startScreenStyleTarget = 'layoutId:"BYt05tkJv",style:{backgroundColor:"rgb(16, 16, 14)",borderBottomLeftRadius:32,borderBottomRightRadius:32,borderTopLeftRadius:32,borderTopRightRadius:32}';
const startScreenStyleReplacement = 'layoutId:"BYt05tkJv",style:{backgroundColor:"rgb(16, 16, 14)",borderBottomLeftRadius:32,borderBottomRightRadius:32,borderTopLeftRadius:32,borderTopRightRadius:32,backgroundImage:"url(\'../framerusercontent.com/images/enhanced_screen_1_know_your_score.png\')",backgroundSize:"cover",backgroundPosition:"center"}';

if (!content.includes(startScreenStyleTarget)) {
  console.error('ERROR: Could not find startScreenStyleTarget');
  process.exit(1);
}
content = content.replace(startScreenStyleTarget, startScreenStyleReplacement);
console.log('Updated Start Screen style');

// Start Screen Status Bar style & colors
// Change backgroundColor:"rgb(16, 16, 14)" in PnCRya7F8 to transparent
const startStatusBarTarget = 'layoutId:"PnCRya7F8",style:{backgroundColor:"rgb(16, 16, 14)"}';
const startStatusBarReplacement = 'layoutId:"PnCRya7F8",style:{backgroundColor:"transparent",position:"relative",zIndex:2}';
content = content.replace(startStatusBarTarget, startStatusBarReplacement);

// Remove Bottom and Graphic from Start Screen
// Status Bar end for Start Screen:
const startScreenIdx = content.indexOf('layoutId:"BYt05tkJv"');
const statusBarEnd = content.indexOf('withExternalLayout:!0})]})', startScreenIdx);
const homeScreenIdx = content.indexOf('layoutId:"m1JmsPrk6"');

// From statusBarEnd + 'withExternalLayout:!0})]})'.length to homeScreenIdx
// The original code has: ,o(r.div,{className:"framer-1uwm5q7",...})]}),o(r.div,{className:"framer-p7nyl6","data-framer-name":"Home Screen"
// We want it to be: ]}),o(r.div,{className:"framer-p7nyl6","data-framer-name":"Home Screen"
const startSliceToRemove = content.slice(statusBarEnd + 'withExternalLayout:!0})]})'.length, homeScreenIdx - ',o(r.div,{className:"framer-p7nyl6","data-framer-name":"Home Screen",'.length + 3);
console.log('startSliceToRemove length:', startSliceToRemove.length);
console.log('startSliceToRemove starts with:', startSliceToRemove.slice(0, 100));
console.log('startSliceToRemove ends with:', startSliceToRemove.slice(-100));

content = content.slice(0, statusBarEnd + 'withExternalLayout:!0})]})'.length) + ']}' + content.slice(homeScreenIdx - ',o(r.div,{className:"framer-p7nyl6","data-framer-name":"Home Screen",'.length);
console.log('Removed Bottom and Graphic from Start Screen');

// 2. Home Screen
// Add backgroundImage to Home Screen style
const homeScreenStyleTarget = 'layoutId:"m1JmsPrk6",style:{backgroundColor:"rgb(16, 16, 14)",borderBottomLeftRadius:32,borderBottomRightRadius:32,borderTopLeftRadius:32,borderTopRightRadius:32}';
const homeScreenStyleReplacement = 'layoutId:"m1JmsPrk6",style:{backgroundColor:"rgb(16, 16, 14)",borderBottomLeftRadius:32,borderBottomRightRadius:32,borderTopLeftRadius:32,borderTopRightRadius:32,backgroundImage:"url(\'../framerusercontent.com/images/enhanced_screen_2_understand_credit.png\')",backgroundSize:"cover",backgroundPosition:"center"}';
content = content.replace(homeScreenStyleTarget, homeScreenStyleReplacement);

// Home Screen Status Bar style
const homeStatusBarTarget = 'layoutId:"cokQYy0IH",style:{backgroundColor:"rgb(16, 16, 14)"}';
const homeStatusBarReplacement = 'layoutId:"cokQYy0IH",style:{backgroundColor:"transparent",position:"relative",zIndex:2}';
content = content.replace(homeStatusBarTarget, homeStatusBarReplacement);

// Remove Content from Home Screen
const newHomeIdx = content.indexOf('layoutId:"m1JmsPrk6"');
const newHomeStatusEnd = content.indexOf('withExternalLayout:!0})]})', newHomeIdx);
const newPayIdx = content.indexOf('layoutId:"fgYg2A_C_"');

const homeSliceToRemove = content.slice(newHomeStatusEnd + 'withExternalLayout:!0})]})'.length, newPayIdx - ',o(r.div,{className:"framer-1ujhebw","data-framer-name":"Payment Screen",'.length + 3);
console.log('homeSliceToRemove length:', homeSliceToRemove.length);
console.log('homeSliceToRemove starts with:', homeSliceToRemove.slice(0, 100));
console.log('homeSliceToRemove ends with:', homeSliceToRemove.slice(-100));

content = content.slice(0, newHomeStatusEnd + 'withExternalLayout:!0})]})'.length) + ']}' + content.slice(newPayIdx - ',o(r.div,{className:"framer-1ujhebw","data-framer-name":"Payment Screen",'.length);
console.log('Removed Content from Home Screen');

// 3. Payment Screen
// Add backgroundImage to Payment Screen style
const payScreenStyleTarget = 'layoutId:"fgYg2A_C_",style:{backgroundColor:"rgb(16, 16, 14)",borderBottomLeftRadius:32,borderBottomRightRadius:32,borderTopLeftRadius:32,borderTopRightRadius:32}';
const payScreenStyleReplacement = 'layoutId:"fgYg2A_C_",style:{backgroundColor:"rgb(16, 16, 14)",borderBottomLeftRadius:32,borderBottomRightRadius:32,borderTopLeftRadius:32,borderTopRightRadius:32,backgroundImage:"url(\'../framerusercontent.com/images/enhanced_screen_3_improve_with_plan.png\')",backgroundSize:"cover",backgroundPosition:"center"}';
content = content.replace(payScreenStyleTarget, payScreenStyleReplacement);

// Payment Screen Status Bar style
const payStatusBarTarget = 'layoutId:"ZzWqJhtfK",style:{backgroundColor:"rgb(16, 16, 14)"}';
const payStatusBarReplacement = 'layoutId:"ZzWqJhtfK",style:{backgroundColor:"transparent",position:"relative",zIndex:2}';
content = content.replace(payStatusBarTarget, payStatusBarReplacement);

// Remove Content from Payment Screen
const finalPayIdx = content.indexOf('layoutId:"fgYg2A_C_"');
const finalPayStatusEnd = content.indexOf('withExternalLayout:!0})]})', finalPayIdx);
const payCloseIdx = content.indexOf('Ct=["@supports (aspect-ratio: 1)');

// Before Ct=["@supports (aspect-ratio: 1) there are closing brackets.
// Let's find the slice between finalPayStatusEnd and the closing of Payment Screen
const paySlice = content.slice(finalPayStatusEnd + 'withExternalLayout:!0})]})'.length, payCloseIdx);
console.log('paySlice before closing:', paySlice.slice(0, 100));
console.log('paySlice end before closing:', paySlice.slice(-50));

// In the original, Payment Screen was:
// o(r.div,{className:"framer-1ujhebw","data-framer-name":"Payment Screen",...,children:[StatusBar, Content]})
// So after StatusBar, we just need ']}' to close children and o(r.div) of Payment Screen, followed by the rest of the parent closing brackets:
// Original tail was: ]})]})})})})}),Ct=
// So after StatusBar: ]}) followed by parent closing brackets: ]})})})})}),Ct=
content = content.slice(0, finalPayStatusEnd + 'withExternalLayout:!0})]})'.length) + ']})]})})})})}),' + content.slice(payCloseIdx);
console.log('Removed Content from Payment Screen');

// Update Status Bar text & levels colors to sleek dark (#0f172a)
// Replace stroke="white" and fill="white" in Levels SVGs
content = content.replace(/stroke="white"/g, 'stroke="#0f172a"');
content = content.replace(/fill="white"/g, 'fill="#0f172a"');
content = content.replace(/--extracted-r6o4lv":"rgb\(255, 255, 255\)"/g, '--extracted-r6o4lv":"rgb(15, 23, 42)"');

fs.writeFileSync(filePath, content);
console.log('SUCCESS: Written updated 5b4b.mjs');
