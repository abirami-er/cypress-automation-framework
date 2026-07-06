/// <reference types="cypress" />

class CheckoutPage {
    enterFirstName(FirstName) {
        cy.get("#first-name").click()
        .type(FirstName);
    }
    enterlastname(lastname) {
        cy.get("#last-name").click()
        .type(lastname);
    }
    enterPostalCode(PostalCode) {
        cy.get("#postal-code").click()
        .type(PostalCode);
    }
    continue() {
        cy.get("#continue").click();
    }
    finish() {
        cy.get("#finish").click();
    }
    backToProducts() {
        cy.get('[name="back-to-products"]').click();

    }

}
export default new CheckoutPage();
