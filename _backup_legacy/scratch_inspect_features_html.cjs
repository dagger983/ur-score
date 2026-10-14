const fs = require('fs');
const html = fs.readFileSync('payer_clone/payer.framer.website/features.html', 'utf8');

console.log('features.html length:', html.length);
console.log('Contains "From instant transfers":', html.includes('From instant transfers'));
console.log('Contains "International payments":', html.includes('International payments'));
console.log('Contains "Analytics.":', html.includes('Analytics.'));
console.log('Contains "Integrations.":', html.includes('Integrations.'));
