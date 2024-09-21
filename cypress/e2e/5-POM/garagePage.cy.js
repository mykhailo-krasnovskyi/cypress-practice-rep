import SignInForm from "../../../page-objects/components/forms/SignInForm";
import testData from "../../fixtures/credentials.json";

describe('Garage page', () => {

    beforeEach(() => {
        cy.visit('');
        cy.contains('Sign In').click();

        SignInForm.loginWithCredentials(testData.users.userWithCars.email, testData.users.userWithCars.password);
        cy.get('h1').should('have.text', 'Garage');
    })

    it.only('Adding car', () => {
        cy.contains('Add car').click();
        cy.get('#addCarMileage').type('4242');
        cy.get(".modal-footer .btn-primary").contains("Add").click();
    })

    after(() => {
        // cy.wait(500);
        // cy.get('.car-item').each((item) => { 
        //     cy.wrap(item).find('.icon-edit').click();
        //    cy.get('.btn-outline-danger').click();
        //    cy.get('.btn-danger').click();
        // })
        cy.request({ method: 'GET', url: '/api/cars', failOnStatusCode: false }).then((response) => {
            // cy.log(JSON.stringify(response.body.data));
            expect(response.status).to.eq(200);
            expect(response.body.data.length).to.greaterThan(1);
            const cars = response.body.data;
            cars.forEach((car) => {
                cy.request({ method: 'DELETE', url: `/api/cars/${car.id}`, failOnStatusCode: false }).then((response) => {
                    cy.log(response.body)
                    expect(response.status).to.eq(200);
                })
            })

        })



    })

})