const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
const start = html.indexOf('class="framer-tgs7m5"');
const end = html.indexOf('class="framer-vlnoe0"');
const chunk = html.slice(start, end);

let pos = 0;
while (true) {
  const vIdx = chunk.indexOf('class="ssr-variant', pos);
  if (vIdx === -1) break;
  const vEnd = chunk.indexOf('>', vIdx);
  console.log('Variant tag:', chunk.slice(vIdx, vEnd + 1));
  pos = vEnd + 1;
}
