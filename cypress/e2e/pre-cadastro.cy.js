/// <reference types="cypress" />
const { contains } = require('cypress/types/jquery');
var faker = require('faker');

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    
});

describe('Funcionalidade Pré-Cadastro', () => {

   it('Completara Pré-Cadastro', () => {
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('@teste145@')
    cy.get(':nth-child(4) > .button').click()


    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(faker.name.firstName())
    cy.get('#account_last_name').type(faker.name.lastName())
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain','Detalhes da conta modificados com sucesso.')
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
   
    
        
   }); 


});