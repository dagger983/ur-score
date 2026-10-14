const fs = require('fs');
const txt = fs.readFileSync('payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/PA9P1ZMWcjOiVejJmKq_Jc4NnxPKpDOgsS-L4kSTZPg.NZVYKLTE.mjs', 'utf8');

console.log('Imports in support page:');
const imp = txt.match(/import[^\;]+\;/g) || [];
for (const i of imp.slice(0, 10)) console.log(i);

// Check for CMS or collection references or FAQ components
const faqs = txt.match(/\"[^\"]*\?[^\"]*\"/g) || [];
console.log('Strings with question marks:', faqs);
