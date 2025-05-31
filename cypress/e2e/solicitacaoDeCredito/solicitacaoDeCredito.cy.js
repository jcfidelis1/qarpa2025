/// <reference types="cypress" />

beforeEach(() => {
    cy.visit("https://angelofdiasg.tech/qaprogramador/sacfunc/")
});

context('Validação da funcionalidade de aprovação ou reprovação', () => {

    it('Validar os campos obrigatórios', () => {
        
        cy.get('#nome').type('João Carlos')
        cy.get('#email').type('jc@.com.br')
        cy.get('#renda').type(2000)
        cy.get('#cpf').type('096.942.764-62')
        cy.get('#credito').type(1000)
        cy.get('[type="submit"]').click()
        cy.get('#result').should('exist').should('be.visible')
    });
    
    it('Validar aprovação de crédito', () => {

        cy.get('#nome').type('João Carlos')
        cy.get('#email').type('jc@.com.br')
        cy.get('#renda').type(2000)
        cy.get('#cpf').type('096.942.764-62')
        cy.get('#credito').type(15000)
        cy.get('[type="submit"]').click()
        cy.get('#result').should('exist').contains('APROVADA!')
    });

    it('Validar reprovação de crédito', () => {

        cy.get('#nome').type('João Carlos')
        cy.get('#email').type('jc@.com.br')
        cy.get('#renda').type(1000)
        cy.get('#cpf').type('096.942.764-62')
        cy.get('#credito').type(15000)
        cy.get('[type="submit"]').click()
        cy.get('#result').should('exist').contains('REPROVADA')
    });
});