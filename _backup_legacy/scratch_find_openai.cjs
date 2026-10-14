const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.startsWith('scratch') && f.endsWith('.cjs'));
for (const f of files) {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('10A37F') || content.includes('OpenAI')) {
    console.log('Found in:', f);
  }
}
