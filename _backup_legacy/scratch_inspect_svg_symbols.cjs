const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

for (const id of ['svg562521627_4399', 'svg656287312_4184', '-457599713_4727', '-1796426772_4257']) {
  let idx = fHtml.indexOf(id);
  console.log(id, 'at index:', idx);
  if (idx !== -1) {
    const start = fHtml.lastIndexOf('<svg', idx);
    const end = fHtml.indexOf('</svg>', idx) + 6;
    console.log(fHtml.slice(start, end));
  }
}
