const fs = require('fs');

const content = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
const ids = [
  'svg-1880125910_4413',
  'svg736774121_4629',
  'svg562521627_4399',
  'svg656287312_4184',
  'svg-457599713_4727',
  'svg-1796426772_4257',
  'svg-2139612630_280'
];

for (const id of ids) {
  const re = new RegExp('<svg[^>]*id="' + id + '"[\\s\\S]*?<\\/svg>');
  const match = content.match(re);
  if (match) {
    console.log('=== ID: ' + id + ' (len: ' + match[0].length + ') ===');
    console.log(match[0]);
  } else {
    console.log('=== ID: ' + id + ' NOT FOUND ===');
  }
}
