/// <reference types="cypress" />

class CartPage {
    clickCheckout() {
        cy.get("#checkout").click();
    }
    removeItem() {
        cy.get("#remove-sauce-labs-backpack").click();
    }
}
export default new CartPage();
