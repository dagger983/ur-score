const fs = require('fs');

const filePath = 'payer_clone/payer.framer.website/index.html';
let html = fs.readFileSync(filePath, 'utf8');

// In index.html, let's find all occurrences of Start Screen, Home Screen, Payment Screen
console.log('Start Screen occurrences in index.html:', (html.match(/data-framer-name="Start Screen"/g) || []).length);
console.log('Home Screen occurrences in index.html:', (html.match(/data-framer-name="Home Screen"/g) || []).length);
console.log('Payment Screen occurrences in index.html:', (html.match(/data-framer-name="Payment Screen"/g) || []).length);
console.log('Graphic (doughnut) occurrences in index.html:', (html.match(/svg365209724_631|data-framer-name="Graphic"/g) || []).length);
