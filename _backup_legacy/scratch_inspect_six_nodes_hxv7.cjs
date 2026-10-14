const fs = require('fs');
const content = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/HXv7CzdUVUNETmbtrON9WIP3UR8hrdlL3Q7w2lA4VTc.QTQZLXZN.mjs', 'utf8');
const names = ['Meta AI', 'Anthropic Claude', 'OpenAI ChatGPT', 'Perplexity AI', 'Google Gemini', 'UR Score Logo'];
for (const n of names) {
  const target = '"data-framer-name":"' + n + '"';
  const idx = content.indexOf(target);
  console.log(n, 'at pos', idx);
  if (idx !== -1) {
    const svgStart = content.indexOf('svg:', idx);
    const svgEnd = content.indexOf(",withExternalLayout", svgStart);
    console.log('SVG length:', svgEnd - svgStart);
    console.log('SVG chunk:', content.slice(svgStart + 5, svgStart + 150));
  }
}
