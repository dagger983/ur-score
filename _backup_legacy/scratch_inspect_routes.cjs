const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/script_main.4UR2MR5E.mjs', 'utf8');

// Find all dynamic imports like import("./...")
const imports = txt.match(/import\(\"\.\/([^\"]+)\"\)/g) || [];
console.log('Dynamic imports in script_main:');
console.log(imports);

// Find route mappings in script_main
const routeIdx = txt.indexOf('routes:');
if (routeIdx !== -1) {
  console.log('routes context:');
  console.log(txt.slice(routeIdx, routeIdx + 1200));
}
