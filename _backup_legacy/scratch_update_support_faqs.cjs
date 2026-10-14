const fs = require('fs');

const htmlPath = 'payer_clone/payer.framer.website/support.html';
const mjsPath = 'payer_clone/framerusercontent.com/sites/2kJJ8iJpcEYQepIyD4z8Jk/PA9P1ZMWcjOiVejJmKq_Jc4NnxPKpDOgsS-L4kSTZPg.NZVYKLTE.mjs';

let html = fs.readFileSync(htmlPath, 'utf8');
let mjs = fs.readFileSync(mjsPath, 'utf8');

// 1. Fix typo and subtitles
html = html.replace(/Chat with out team/g, 'Chat with Our Team');
mjs = mjs.replace(/Chat with out team/g, 'Chat with Our Team');

const oldSub = 'Browse our FAQs to find quick solutions to common issues, from payments and security to account management and more.';
const newSub = 'Browse our FAQs to find quick solutions about credit scores, official CIBIL sync, AI improvement recommendations, and bank-grade privacy.';

html = html.split(oldSub).join(newSub);
mjs = mjs.split(oldSub).join(newSub);

// 2. Map questions and answers
const faqData = [
  {
    oldQ: 'How long do transfers take?',
    newQ: 'Will checking my score on UR Score affect my credit rating?',
    oldA: 'Most transfers are instant, but bank processing times may vary. International payments can take 1\u20133 business days.',
    newA: 'Never. UR Score performs an official soft inquiry. Soft pulls never impact your credit score, lower your rating, or leave negative marks on your credit profile.'
  },
  {
    oldQ: 'What is the maximum amount I can send at once?',
    newQ: 'How often is my credit score updated on UR Score?',
    oldA: 'With UR SCORE, you can send up to $1,000,000 in a single transaction, depending on your account verification level.',
    newA: 'Your score updates in real time whenever refreshed, syncing directly with CIBIL and Experian so you always have the most accurate, current credit picture.'
  },
  {
    oldQ: 'Is my money secure with UR Score?',
    newQ: 'Is my financial and personal data safe with UR Score?',
    oldA: 'Yes! We use bank-grade encryption, multi-layer security, and fraud detection systems to keep your funds and data safe.',
    newA: 'Absolutely. We use bank-grade 256-bit AES encryption, multi-factor authentication, and strict RBI-compliant data safeguards. Your data is never shared or sold.'
  },
  {
    oldQ: 'Is my money secure with UR SCORE?',
    newQ: 'Is my financial and personal data safe with UR Score?',
    oldA: 'Yes! We use bank-grade encryption, multi-layer security, and fraud detection systems to keep your funds and data safe.',
    newA: 'Absolutely. We use bank-grade 256-bit AES encryption, multi-factor authentication, and strict RBI-compliant data safeguards. Your data is never shared or sold.'
  },
  {
    oldQ: 'Are there any fees for sending money?',
    newQ: 'How does the AI Companion help me improve my score?',
    oldA: 'Domestic transfers are free, while international transactions may have a small processing fee. You\u2019ll always see the fee before confirming your payment.',
    newA: 'Our AI analyzes your credit utilization, payment track record, and inquiries to give exact simulations—such as prepaying ₹14,000 to unlock +22 points by next cycle.'
  },
  {
    oldQ: 'How can I resolve an issue with my transaction?',
    newQ: 'How can I dispute errors found on my credit report?',
    oldA: 'If a transaction is delayed or failed, check your payment details and bank status first. If the issue persists, visit our Help Center or contact our support team for assistance.',
    newA: 'If you identify an inaccurate account or unauthorized inquiry, our support team and in-app dispute resolution guide help you file an official dispute directly with CIBIL.'
  }
];

for (const item of faqData) {
  html = html.split(item.oldQ).join(item.newQ);
  mjs = mjs.split(item.oldQ).join(item.newQ);
  mjs = mjs.split(item.oldA).join(item.newA);
}

fs.writeFileSync(htmlPath, html, 'utf8');
fs.writeFileSync(mjsPath, mjs, 'utf8');

console.log('Successfully updated support.html and PA9P1 mjs FAQs!');
