describe('automation',()=>{
    it('css selectors',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#name').click()
        .type('abirami');

        cy.get('#email').click()
        .type('abirami@gmail.com');
    })
})