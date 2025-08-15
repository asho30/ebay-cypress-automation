const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 20000,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false, // keep false so we merge first
      json: true
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    chromeWebSecurity: false,
  },
});
// Run CMD:
/*
npm run test:run
npm run report:open
*/