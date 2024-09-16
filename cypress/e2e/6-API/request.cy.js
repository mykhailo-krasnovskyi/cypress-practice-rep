describe('Request API tests', () => {
    it('GET 1 + expect', () => {
        cy.request('GET', '/api/cars/brands').then((response) => {
            cy.log(JSON.stringify(response));

            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.length(5);
            // the same 
            expect(response.body.data.length).to.eq(5);
            expect(response.body.data[0].title).to.eq('Audi');

        })
    })

    it('GET 2 + Wrap', () => {
        cy.request('GET', '/api/cars/brands').then((response) => {
            cy.log(JSON.stringify(response));
            cy.wrap(response.status).should('eq', 200);
        })
    })

    it('GET 3 + its', () => {
        cy.request('GET', '/api/cars/brands').its('body.data').should('have.length', 5);
    })


    it('POST 1 - status 400', () => {
        const userInfo = {
            "email": "test@test.com",
            "password": "Qwerty12345",
            "remember": false
        }

        cy.request({ method: 'POST', url: '/api/auth/signin', body: userInfo, failOnStatusCode: false }).then((response) => {
            expect(response.status).to.eq(400);
        })
    })

    it('POST 1 - status 200', () => {
        const userInfo = {
            "email": "michael.krasnovskyi+testUser1@gmail.com",
            "password": "ZSgeVQhuU3qkvlG",
            "remember": false
        }

        cy.request({ method: 'POST', url: '/api/auth/signin', body: userInfo, failOnStatusCode: false }).then((response) => {
            cy.log(JSON.stringify(response.headers));
            expect(response.status).to.eq(200);
        })
    })


    describe(('Token tests'), () => {
        let cookiesValue;

        before(() => {
            const userInfo = {
                "email": "michael.krasnovskyi+testUser1@gmail.com",
                "password": "ZSgeVQhuU3qkvlG",
                "remember": false
            }

            cy.request({ method: 'POST', url: '/api/auth/signin', body: userInfo, failOnStatusCode: false }).then((response) => {
                const cookies = response.headers["set-cookie"][0];
                cookiesValue = cookies.split(';')[0];
                cy.log(JSON.stringify(cookiesValue));
            })
        })

        it.only("Get User's cars", () => {
            cy.request({ method: 'GET', url: '/api/cars', failOnStatusCode: false, headers: { 'Cookie': cookiesValue } }).then((response) => {
                cy.log(JSON.stringify(response.body.data));
                expect(response.status).to.eq(200);
                expect(response.body.data.length).to.greaterThan(1);
            })
        })

        it.only("Add a car", () => {

            const car = {
                "carBrandId": 1,
                "carModelId": 1,
                "mileage": 122
            }
            cy.request({ method: 'POST', url: '/api/cars', failOnStatusCode: false, headers: { 'Cookie': cookiesValue }, body: car }).then((response) => {
                cy.log(JSON.stringify(response.body.data));
                expect(response.status).to.eq(201);
                expect(response.body.data.carBrandId).to.eq(car.carBrandId);
            })
        })
    })



})