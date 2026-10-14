const fs = require('fs');
const h = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

function find(term) {
  let pos = 0;
  while ((pos = h.indexOf(term, pos)) !== -1) {
    console.log(`Found ${term} at ${pos}:`);
    console.log(h.slice(pos - 20, pos + 250));
    pos += term.length;
  }
}

find('framer-jowe18');
find('framer-1i9pyl1');
find('framer-u67xta');
find('framer-1x6bsw4');
