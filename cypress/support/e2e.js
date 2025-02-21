// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// Import custom commands
import './commands';

// Global before hook
beforeEach(() => {
  // Clear cookies and local storage before each test
  cy.clearCookies();
  cy.clearLocalStorage();

  // Log test start
  cy.log(`Running test: ${Cypress.currentTest.title}`);
});

// Global after hook
afterEach(() => {
  // Log test end
  cy.log(`Finished test: ${Cypress.currentTest.title}`);
});