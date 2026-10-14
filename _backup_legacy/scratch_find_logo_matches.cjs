const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');

const regex = /svg-2139612630_280/g;
let m;
let i = 0;
while ((m = regex.exec(html)) !== null) {
  i++;
  console.log(`\n=== Occurrence #${i} at ${m.index} ===`);
  const before = html.slice(Math.max(0, m.index - 250), m.index);
  const after = html.slice(m.index, Math.min(html.length, m.index + 250));
  console.log(before + '[[[MATCH]]]' + after);
}
