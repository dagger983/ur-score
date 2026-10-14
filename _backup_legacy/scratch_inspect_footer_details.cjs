const fs = require('fs');

const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

// Find all classes inside <footer
const fStart = html.indexOf('<footer');
const fEnd = html.indexOf('</footer>', fStart);
const fHtml = html.substring(fStart, fEnd);

const classMatches = fHtml.match(/class="([^"]+)"/g) || [];
const classes = new Set();
for (const c of classMatches) {
  const clsList = c.replace('class="', '').replace('"', '').split(' ');
  clsList.forEach(cls => classes.add(cls));
}

console.log('Classes inside footer:', [...classes]);

// Search each class in CSS
for (const cls of classes) {
  const reg = new RegExp('\\.' + cls + '[^{]*\\{[^}]*\\}', 'g');
  let m;
  while ((m = reg.exec(html)) !== null) {
    if (m[0].includes('height') || m[0].includes('overflow') || m[0].includes('padding') || m[0].includes('clip')) {
      console.log('CSS for .' + cls + ':', m[0]);
    }
  }
}
