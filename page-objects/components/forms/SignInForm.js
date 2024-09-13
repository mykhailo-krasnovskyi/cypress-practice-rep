/// <reference types="cypress" />

class SignInForm {
    get emailField() {
        return cy.get('#signinEmail');
    }

    get passwordField() {
        return cy.get('#signinPassword');
    }

    get errorMessage() {
        return cy.get('.invalid-feedback');
    }

    get loginButton() {
        return cy.get('app-signin-modal .btn-primary');
    }

    get loginErrorMessage() {
        return cy.get('.alert-danger');
    }

    loginWithCredentials(email, password) {
        this.emailField.type(email);
        this.passwordField.type(password);
        this.loginButton.click();
    }

    triggerErrorOnEmailField() {
        this.emailField.focus().blur();
    }

    triggerErrorOnPasswordField() {
        this.passwordField.focus().blur();
    }

    triggerErrorOnField(field) {
        let element;
        if (field === 'email') {
            element = this.emailField;
        } else {
            element = this.passwordField;
        }

        element.focus().blur();
    }

    enterEmail(email) {
        this.emailField.type(email);
    }

}

export default new SignInForm();