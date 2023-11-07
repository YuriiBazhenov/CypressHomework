// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//


Cypress.Commands.add('checkOptionAndValidateOthers', (optionToCheck, expectedTexts) => {
    cy.contains(optionToCheck).find('input').check().should('be.checked')

    expectedTexts.filter(option => option !== optionToCheck).forEach(unchecked => {
      cy.contains(unchecked).find('input').should('not.be.checked')
    })
  })


//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })