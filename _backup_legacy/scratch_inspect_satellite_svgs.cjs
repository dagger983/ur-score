const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');

const nodes = [
  'OpenAI ChatGPT',
  'Anthropic Claude',
  'Google Gemini',
  'Meta AI',
  'Perplexity AI',
  'UR SCORE Logo',
  'xAI Grok'
];

for (const name of nodes) {
  let idx = txt.indexOf(`"data-framer-name":"${name}"`);
  console.log(`=== Node: ${name} (idx: ${idx}) ===`);
  if (idx !== -1) {
    const svgStart = txt.indexOf("svg:", idx);
    const svgEnd = txt.indexOf(",withExternalLayout", svgStart);
    console.log(txt.slice(svgStart, svgStart + 250));
  }
}
