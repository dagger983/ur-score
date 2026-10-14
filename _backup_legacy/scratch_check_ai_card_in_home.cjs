const fs = require('fs');

const home = fs.readFileSync('payer_clone/payer.framer.website/index.html', 'utf8');
for (const term of ['HXv7', 'knnqq3', 'Clandestine', 'ContrastAI', 'AI Integrations', 'OpenAI']) {
  console.log(term, 'in index.html:', home.indexOf(term));
}
