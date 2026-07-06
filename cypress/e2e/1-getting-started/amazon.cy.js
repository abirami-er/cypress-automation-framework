import 'cypress-xpath';

describe('automation',()=>{
    it('css selectors',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#name').click()
        .type('abirami');

        cy.get('#email').click()
        .type('abirami@gmail.com');
        
        cy.get('.start').click();
        cy.get("button[name='stop']").click();
        cy.contains('button',"Point Me").click();
        cy.contains("Simple Alert").click();

    })
})