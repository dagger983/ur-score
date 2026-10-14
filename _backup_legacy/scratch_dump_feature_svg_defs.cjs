const fs = require('fs');

const fHtml = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

const ids = [
  'svg562521627_4399',
  'svg656287312_4184',
  '-457599713_4727',
  '-1796426772_4257'
];

for (const id of ids) {
  const match = fHtml.match(new RegExp('<svg[^>]*id="[^"]*' + id + '[^"]*"[\\s\\S]*?<\\/svg>'));
  if (match) {
    console.log('=== SVG', id, '===');
    console.log(match[0].slice(0, 500));
  }
}
