import HomePage from "../../../page-objects/pages/HomePage";
import SignInForm from "../../../page-objects/components/forms/SignInForm";

describe('Hillel Auto Sign In Form', () => {

    beforeEach(() => {
        HomePage.open();
        HomePage.openSignInForm();
    });

    it.only('Successful login',  () => {

        SignInForm.loginWithCredentials('michael.krasnovskyi+testUser1@gmail.com', 'ZSgeVQhuU3qkvlG');
        cy.get('h1').should('have.text', 'Garage');
    })

    it('Login without email', () => {
        //SignInForm.triggerErrorOnEmailField();
        SignInForm.triggerErrorOnField('email');
        SignInForm.errorMessage.should('have.text', 'Email required');
    })

    it('Login without password', () => {
        SignInForm.triggerErrorOnPasswordField();
        SignInForm.errorMessage.should('have.text', 'Password required');
    })

    it('Login with invalid email', () => {
        SignInForm.enterEmail('testtest');
        SignInForm.triggerErrorOnEmailField();
        SignInForm.errorMessage.should('have.text', 'Email is incorrect');
    })

    it('Login with incorrect email and password', () => {
        SignInForm.loginWithCredentials('michael.krasnovskyi+tes4343431@gmail.com', '434343');
        SignInForm.loginErrorMessage.should('have.text', 'Wrong email or password');
    })
})