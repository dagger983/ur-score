const { exec } = require('child_process');
const fs = require('fs');

// We can run an edge headless command with remote debugging or a script, or we can use puppeteer if available or simple edge script
// But wait! Can we inject a small console.log or fetch into features.html temporarily to log the metrics to server?
// YES! Or we can inspect the exact CSS rules!
