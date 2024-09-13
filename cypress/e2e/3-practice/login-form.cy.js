/// <reference types="cypress" />

describe('Saucedemo login form', () => {
    beforeEach(() => {
        cy.visit('');


    });

    it('Username field verifying - error when its empty', () => {
        cy.get('[data-test="password"]').type('qwerty');
        cy.get('[data-test="login-button"]').click();
        // Перший варіант
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required');
        // Другий варіант
        cy.contains('Epic sadface: Username is required').should('be.visible');
        cy.fixture('')
    });

    it('Password field verifying - error when its empty', () => {
        cy.get('[data-test="username"]').type('qwerty', { delay: 500 });
        cy.get('[data-test="login-button"]').click();
        // Перший варіант
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Password is required');
        // Другий варіант
        cy.contains('Epic sadface: Password is required').should('be.visible');
    });

    it('Form verifying - error when password or username is incorrect', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('qwerty');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');

    });

    it('Key test', () => {
        cy.get('[data-test="usrname"]').type('standard_user');
        cy.get('[data-test="password"]').type('qwerty {enter}');
        cy.viewport('iphone-xr');
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');

    });


})


describe('Additional', () => {
    it('Case 1', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('button[type="submit"]').click();
        cy.contains('Your username is invalid!').should('be.visible');

    })
})
