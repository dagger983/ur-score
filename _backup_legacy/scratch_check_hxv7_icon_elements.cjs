const fs = require('fs');

const path = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs';
const content = fs.readFileSync(path, 'utf8');

for (const name of ['OpenAI ChatGPT', 'Anthropic Claude', 'Google Gemini', 'Meta AI', 'Perplexity AI']) {
  let idx = content.indexOf(`"data-framer-name":"${name}"`);
  if (idx !== -1) {
    console.log('===', name, '===');
    console.log(content.slice(Math.max(0, idx - 200), idx + 200));
  }
}
