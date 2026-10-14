const fs = require('fs');

const dir = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk';
for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith('.mjs')) continue;
  const content = fs.readFileSync(dir + '/' + file, 'utf8');
  if (content.includes('AI Integrations') || content.includes('Unified with OpenAI')) {
    console.log('Found in', file);
  }
}
