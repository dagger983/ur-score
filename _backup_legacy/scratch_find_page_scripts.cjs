const fs = require('fs');

for (const p of ['features.html', 'company.html', 'support.html', 'download.html']) {
  const full = 'payer_clone/payer.framer.website/' + p;
  const content = fs.readFileSync(full, 'utf8');
  const scripts = content.match(/src="([^"]+\.mjs)"/g) || [];
  console.log(`=== ${p} scripts ===`);
  console.log(scripts);
}
