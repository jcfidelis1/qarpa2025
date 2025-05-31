/// <reference types="cypress" />

beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/")
});

context('Validação de tela de login', () => {

    it('Validar os campos obrigatórios', () => {
        
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
       
    });

    
});