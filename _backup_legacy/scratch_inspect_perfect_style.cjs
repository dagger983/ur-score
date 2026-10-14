const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');
const start = html.indexOf('<style id="ur-features-perfect-style">');
const end = html.indexOf('</style>', start);
console.log(html.substring(start, end + 8));
