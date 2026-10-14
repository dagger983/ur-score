const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/script_main.4UR2MR5E.mjs', 'utf8');

const target = '<svg width="40" height="48" fill="none" viewBox="0 0 40 48"';
const idx = txt.indexOf(target);
console.log('Target found at:', idx);
if (idx !== -1) {
  console.log('Context before:', txt.slice(idx - 150, idx));
  console.log('Context after end of svg:', txt.slice(idx + 1038473 - 50, idx + 1038473 + 150));
}
