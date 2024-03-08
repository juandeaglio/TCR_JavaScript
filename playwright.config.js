// playwright.config.js
module.exports = {
    testDir: './test/integration/playwright', // Directory with Playwright tests
    reporter: [ ['html', { open: 'never'}], ['list'] ],
    // other configurations...
  };