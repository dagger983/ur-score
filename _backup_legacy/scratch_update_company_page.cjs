const fs = require('fs');

const htmlPath = 'payer_clone/payer.framer.website/company.html';
const mjsPath = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/QXA6kpwDHD9R9vWPZGdUf4q50yi3D9TbGMdHlKr4W9g.EJJQNXSP.mjs';

let html = fs.readFileSync(htmlPath, 'utf8');
let mjs = fs.readFileSync(mjsPath, 'utf8');

// Replacements map
const replacements = [
  // Heading
  {
    old: 'Future of Payments',
    new: 'The Future of Credit Health'
  },
  // Milestone 1
  {
    old: 'We raised $30 Million',
    new: 'Founded for Financial Clarity'
  },
  {
    old: 'In 2021, UR SCORE secured $30 million in funding from leading investors who believe in our vision of seamless, borderless payments.',
    new: 'UR Score was founded by credit experts and AI engineers with a mission to demystify credit health and provide actionable roadmaps to growth.'
  },
  {
    old: 'In 2021, UR Score secured $30 million in funding from leading investors who believe in our vision of seamless, borderless payments.',
    new: 'UR Score was founded by credit experts and AI engineers with a mission to demystify credit health and provide actionable roadmaps to growth.'
  },
  // Milestone 2
  {
    old: '$75 Billion processed',
    new: 'Official CIBIL Sync & AI Engine'
  },
  {
    old: 'From everyday transactions to high-value business payments, UR Score has securely processed over $75 billion worldwide.',
    new: 'Integrated real-time synchronization with CIBIL and deployed India\'s premier AI credit companion for predictive score simulations.'
  },
  {
    old: 'From everyday transactions to high-value business payments, UR SCORE has securely processed over $75 billion worldwide.',
    new: 'Integrated real-time synchronization with CIBIL and deployed India\'s premier AI credit companion for predictive score simulations.'
  },
  // Milestone 3
  {
    old: '250 million active users',
    new: '500,000+ Profiles Empowered'
  },
  {
    old: 'With 250 million active users, UR Score has become a trusted platform for seamless money transfers.',
    new: 'Empowering over 500,000 individuals with 100% free credit tracking, zero hard pulls, and bank-grade data security.'
  },
  {
    old: 'With 250 million active users, UR SCORE has become a trusted platform for seamless money transfers.',
    new: 'Empowering over 500,000 individuals with 100% free credit tracking, zero hard pulls, and bank-grade data security.'
  },
  // Floating cards
  {
    old: '$1,200',
    new: 'Score: 785'
  },
  {
    old: '$21,003',
    new: 'Utilization: 18%'
  },
  {
    old: '$14,000',
    new: 'Prepay ₹14,000'
  },
  {
    old: '$15,000',
    new: '+28 pts'
  }
];

for (const r of replacements) {
  html = html.split(r.old).join(r.new);
  mjs = mjs.split(r.old).join(r.new);
}

fs.writeFileSync(htmlPath, html, 'utf8');
fs.writeFileSync(mjsPath, mjs, 'utf8');
console.log('Successfully updated company.html and QXA6 mjs startup content!');
