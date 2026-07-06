
describe('assertion',()=>{
    it('for partice',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');
        cy.contains('Automation Testing Practice').should('be.visible');
        cy.get('.start').should('have.text','START');
        cy.get('.start').click();
        cy.get('.stop').should('have.text','STOP');
        cy.get('#name').type('abi');
        cy.get('#name').should('have.value','abi');
        cy.get('.start').should('not.exist')


    })
})