const cypress = require('cypress');

cypress.run({
  spec: './cypress/integration/integration.spec.js',
  browser: 'chrome'
}).then((results) => console.log(`Votre note: ${results.totalPassed} / ${results.totalTests}.`))
  .catch((err) => console.error(err));