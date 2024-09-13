/// <reference types="cypress" />

describe('Home Page', () => {
    it('find', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('div.header_left').find('button');
    })

    it('children', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('nav').children('button');
    })

    it('closest', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('a.header-link').closest('div');
    })

    it('parent', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('h1').parent();
    })

    it('prev', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('[appscrollto="aboutSection"]').siblings();
    })

    it('title', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.title().should('eq', 'Hillel Qauto')
    })

    it('Invoke', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('h1').invoke('hide');
        cy.get('h1').invoke('show');
        cy.get('h1').invoke('text').should('eq', 'Do more!');
    })

    it('its', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        const obj1 = {
            name: 'Object',
            size: '20m sq',
            price: 4242
        }

        cy.wrap(obj1).its('name').should('eq', 'Object');
    })

    it('filter', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('.header-link').filter('a');
    })

    it('eq', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('.contacts_socials>a').eq(3);
    })


    it('not', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('.header-link').not('a');
    })

    it('first, last', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.get('.contacts_socials>a').first();
        cy.get('.contacts_socials>a').last();

    })

    it('aliases', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');

        cy.get('.contacts_socials>a').first().as('firstSocialIcon');
        cy.get('@firstSocialIcon').click();
        cy.get('@firstSocialIcon').click();
        cy.get('@firstSocialIcon').click();
        cy.get('@firstSocialIcon').click();
        cy.get('@firstSocialIcon').click();
    })

    it('each', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');

        // cy.get('.contacts_socials>a').each(($item, index, $list) => {
        //     cy.wrap($item).click();
        // });

        // cy.get('.header-link').each(($item) => {
        //     cy.log(cy.wrap($item).invoke('text'));

        // })

    })

    it('its 2', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');

        const age = 50;
        cy.wrap(age).should('be.greaterThan', 30);
        cy.get('h1').its('text').should('include', 'Do');

    })

    it('nextAll', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');

        cy.get('a.header-link').nextAll();

    })

    it('parents', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');

        cy.get('a.header-link').parents();

    })


    it('then', () => {
        let baseText = "THis is a base text";
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');

        cy.contains('Sign In').click();
        cy.get('#signinEmail').type('teawttsa@fs.fs');
        cy.get('#signinPassword').type('321412414');
        cy.contains('Login').click();
        cy.get('.alert').invoke('text').then((text) => {
            baseText += text;
            cy.log(baseText);
            cy.wrap(baseText).should('eq', 'THis is a base 22textWrong email or password')
        })

    })


    it.only('within', () => {
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
        cy.contains('Sign In').click();
        cy.get('app-signin-modal').within((dqwedsa) => {

            cy.get('.btn-primary');
        })

    })



})
