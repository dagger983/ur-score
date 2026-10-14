const fs = require('fs');
const content = fs.readFileSync('payer_clone/payer.framer.website/download.html', 'utf8');

const regex = /<script\b[^>]*src="([^"]+)"[^>]*>/g;
let m;
console.log('Scripts:');
while ((m = regex.exec(content)) !== null) {
  console.log(m[1]);
}

const typeModules = /<script\b[^>]*type="module"[^>]*>([\s\S]*?)<\/script>/g;
console.log('\nInline modules:');
while ((m = typeModules.exec(content)) !== null) {
  console.log(m[1].substring(0, 300));
}
