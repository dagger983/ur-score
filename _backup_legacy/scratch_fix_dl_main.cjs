const fs = require('fs');

const dlFiles = [
  'payer_clone/payer.framer.website/download.html',
  'payer_clone/payer.framer.website/download/index.html'
];

const dlMainFix = `
.framer-vsqvpy,
.framer-z3pJ7 .framer-vsqvpy,
main.framer-vsqvpy {
  height: auto !important;
  min-height: auto !important;
  overflow: visible !important;
}
`;

for (const f of dlFiles) {
  let content = fs.readFileSync(f, 'utf8');
  if (content.includes('/* Clean Single Centered Phone Mockup */')) {
    content = content.replace('/* Clean Single Centered Phone Mockup */', dlMainFix + '\n/* Clean Single Centered Phone Mockup */');
    fs.writeFileSync(f, content, 'utf8');
    console.log('Fixed dl main in:', f);
  }
}
