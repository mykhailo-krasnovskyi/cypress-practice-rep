describe('Hillel Auto Sign In Form', () => {

    beforeEach(() => {
        cy.visit('');
        cy.contains('Sign In').click();
    });
    // #signinEmail
    // #signinPassword
    // .invalid-feedback
    // .app-signin-modal .btn-primary
    // h1 Garage
    // .alert-danger
    it('Successful login', () => {
        cy.get('#signinEmail').type('michael.krasnovskyi+testUser1@gmail.com');
        cy.get('#signinPassword').type('ZSgeVQhuU3qkvlG');
        cy.get('app-signin-modal .btn-primary').click();
        cy.get('h1').should('have.text', 'Garage');
    })

    it('Login without email', () => {
        cy.get('#signinEmail').focus().blur();
        cy.get('.invalid-feedback').should('have.text', 'Email required');
    })

    it('Login without password', () => {
        cy.get('#signinPassword').focus().blur();
        cy.get('.invalid-feedback').should('have.text', 'Password required');
    })

    it('Login with invalid email', () => {
        cy.get('#signinEmail').type('testtest').blur();
        cy.get('.invalid-feedback').should('have.text', 'Email is incorrect');
    })

    it('Login with incorrect email and password', () => {
        cy.get('#signinEmail').type('michael.krasnovskyi+invalid@gmail.com');
        cy.get('#signinPassword').type('test');
        cy.get('app-signin-modal .btn-primary').click();
        cy.get('.alert-danger').should('have.text', 'Wrong email or password');
    })
})