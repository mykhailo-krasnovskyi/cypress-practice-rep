import HomePage from "../../../page-objects/pages/HomePage";
import SignInForm from "../../../page-objects/components/forms/SignInForm";

describe('Intercept tests', () => {
    it('Check the response ', () => {
        cy.intercept('GET', '/api/cars').as('getCars');
        HomePage.open();
        HomePage.openSignInForm();
        SignInForm.loginWithCredentials('michael.krasnovskyi+testUser1@gmail.com', 'ZSgeVQhuU3qkvlG');
        cy.get('h1').should('have.text', 'Garage');
        cy.wait('@getCars').its('response.body.data[1]').should('have.property', 'brand', 'Ford');
    })

    it.only('Change the body ', () => {
        const body = {
            "status": "ok",
            "data": [
                {
                    "id": 194505,
                    "carBrandId": 4,
                    "carModelId": 16,
                    "initialMileage": 4242,
                    "updatedMileageAt": "2024-09-16T16:58:22.000Z",
                    "carCreatedAt": "2024-09-16T16:58:22.000Z",
                    "mileage": 4242,
                    "brand": "Iphone Iphone Iphone Iphone Iphone Iphone Iphone",
                    "model": "911",
                    "logo": "porsche4324324243.png"
                },
                {
                    "id": 194504,
                    "carBrandId": 1,
                    "carModelId": 3,
                    "initialMileage": 42,
                    "updatedMileageAt": "2024-09-16T16:58:19.000Z",
                    "carCreatedAt": "2024-09-16T16:58:19.000Z",
                    "mileage": 42,
                    "brand": "Audi",
                    "model": "Q7",
                    "logo": "audi.png"
                },
                {
                    "id": 194503,
                    "carBrandId": 1,
                    "carModelId": 1,
                    "initialMileage": 4124,
                    "updatedMileageAt": "2024-09-16T16:58:15.000Z",
                    "carCreatedAt": "2024-09-16T16:58:15.000Z",
                    "mileage": 4124,
                    "brand": "Audi",
                    "model": "TT",
                    "logo": "audi.png"
                },
                {
                    "id": 194502,
                    "carBrandId": 1,
                    "carModelId": 1,
                    "initialMileage": 4242,
                    "updatedMileageAt": "2024-09-16T16:56:31.000Z",
                    "carCreatedAt": "2024-09-16T16:56:31.000Z",
                    "mileage": 4242,
                    "brand": "Audi",
                    "model": "TT",
                    "logo": "audi.png"
                },
                {
                    "id": 192073,
                    "carBrandId": 3,
                    "carModelId": 11,
                    "initialMileage": 24,
                    "updatedMileageAt": "2024-08-30T17:59:02.000Z",
                    "carCreatedAt": "2024-08-30T17:59:02.000Z",
                    "mileage": 24,
                    "brand": "Ford",
                    "model": "Fiesta",
                    "logo": "ford.png"
                }
            ]
        }

        cy.intercept('GET', '/api/cars', body);
        HomePage.open();
        HomePage.openSignInForm();
        SignInForm.loginWithCredentials('michael.krasnovskyi+testUser1@gmail.com', 'ZSgeVQhuU3qkvlG');
        cy.get('h1').should('have.text', 'Garage');

    })
})