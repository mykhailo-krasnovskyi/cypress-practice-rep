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
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selectCustom', (dropdownSelector, option) => {
    cy.get(dropdownSelector).click();
    cy.contains(option).click();
});


// Імплементація
Cypress.Commands.add(
    'selectCustomSuper',
    {
        prevSubject: true, // в даній опції вказано, що попередній об'єкт винен існувати
    },
    (subject, option) => {
        cy.wrap(subject).click();
        cy.contains(option).click();
        // повернення отриманого об'єкту
    }
)