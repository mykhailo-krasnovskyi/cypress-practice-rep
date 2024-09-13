/// <reference types="cypress" />

describe('Advanced Actions', () => {

    it('Dropdowns', () => {
        cy.visit('https://practice.expandtesting.com/dropdown');
        cy.get('#country').select(10);
        cy.get('#country').should('have.value', 'AG');
    })

    it('Custom Dropdowns', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.selectCustom('.dropdown', 'Опція 3');

    })

    it('Custom Dropdowns2', () => {
        cy.visit('http://127.0.0.1:5500/index.html');
        cy.get('.dropdown').selectCustomSuper('Опція 4');

    })

    it('Checkboxes', () => {
        cy.visit('https://practice.expandtesting.com/checkboxes');
        cy.get('#checkbox1').check();
        cy.get('#checkbox2').uncheck();
        cy.get('#checkbox1').uncheck();
        cy.get('[type="checkbox"]').check();
        cy.get('#checkbox1').should('be.checked');
        cy.get('#checkbox2').should('be.checked');

    })


    it('Radio Buttons', () => {
        cy.visit('https://practice.expandtesting.com/radio-buttons');
        cy.get('#red').check();
        cy.get('#blue').check();
        cy.get('#blue').should();

    })

    it('File uploading', () => {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');
        let path = './test.txt'
        cy.get('[type="file"]').selectFile(path);
        cy.get('form').submit();
    })

})


describe('Tables', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html');
    })

    it('Number of columns', () => {
        cy.get('table th').should('have.length', 5);
    })

    it('Number of columns', () => {
        const headerNames = ['ID', 'Name', 'Age', 'Edit', 'Delete'];
        cy.get('table th').each((header, index) => {
            cy.wrap(header).invoke('text').should('eq', headerNames[index]);
        })
    })

    it('Number of rows', () => {
        cy.get('tbody tr').should('have.length', 3);
    })

    it('Number of rows', () => {
        const expectedUser = {
            id: '2',
            name: 'Jane Smith',
            age: 30
        }
        cy.get('tbody tr').eq(expectedUser.id - 1).find('td').eq(1).should('have.text', expectedUser.name);
        cy.get('tbody tr').eq(expectedUser.id - 1).find('td').eq(2).should('have.text', expectedUser.age);

    })

    it('Number of rows', () => {
        const expectedUser = {
            id: '2',
            name: 'Jane Smith',
            age: 30
        }
        cy.get('tbody tr').eq(expectedUser.id - 1).find('td').eq(3).find('[onclick="editUser(this)"]').click();

        cy.get('tbody tr').eq(expectedUser.id - 1).find('td').eq(1).find('input').clear().type('NEW NAME');
        cy.contains('Save').click();
        cy.get('tbody tr').eq(expectedUser.id - 1).find('td').eq(1).should('have.text', 'NEW NAME');

        // cy.get('tbody tr').eq(expectedUser.id - 1).find('td').eq(2).should('have.text', expectedUser.age);

    })
})


describe('Multiple tabs', () => {

    it.only('Facebook', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        // cy.get('.icon-facebook').click();
        // cy.contains('See more on Facebook').should('be.visible');

        // cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        // cy.get('.icon-facebook').parent().invoke('removeAttr', 'target').click();
        // cy.contains('Reload Page').should('be.visible');

        cy.get('.icon-facebook').parent() // можна використати будь-який селектор для пошуку посилання
            .invoke('attr', 'href') // Отримаємо значення атрибута href
            .then((href) => {
                // Використовуємо отримане значення href для навігації
                cy.visit(href);
                cy.url().should('eq', 'https://www.facebook.com/Hillel.IT.School');

            });
    })

})