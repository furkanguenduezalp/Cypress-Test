const { defineConfig } = require('cypress')

module.exports = defineConfig({
  //make full hd:
  viewportHeight: 1080,
  viewportWidth: 1920,
  //don't record video:
  video: false,
  e2e: {
    baseUrl: 'http://localhost:4200',
    //hide the folder:
    excludeSpecPattern: ['**/1-getting-started','**/2-advanced-examples'],
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
