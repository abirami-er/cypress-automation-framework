describe('e-comerce testing',()=>{
    it('bascic testing',()=>{
        cy.visit('https://www.saucedemo.com/');
        cy.get("#user-name").click()
        .type('standard_user');
        cy.get("#password").click()
        .type('secret_sauce');
        cy.get("#login-button").click();
        cy.get("#add-to-cart-sauce-labs-backpack").click();
        cy.get("#add-to-cart-sauce-labs-bike-light").click();
        cy.get("#remove-sauce-labs-backpack").click();
        cy.get(".product_sort_container").select('Name (Z to A)');
        cy.get(".shopping_cart_badge").click();
        cy.get("#checkout").click();
        cy.get("#first-name").click()
        .type('abirami');
        cy.get("#last-name").click()
        .type('R');
        cy.get("#postal-code").click()
        .type('621003');
        cy.get("#continue").click();
        cy.get("#finish").click();
        cy.get(".complete-header")
        .should('have.text', 'Thank you for your order!');
        cy.get('[name="back-to-products"]').click();





    })
})