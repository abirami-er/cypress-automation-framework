/// <reference types="cypress" />

class InventoryPage {
    addProduct() {
        cy.get("#add-to-cart-sauce-labs-backpack").click();
    }

    removeProduct() {
        cy.get("#remove-sauce-labs-backpack").click();
    }

    sortProducts() {
        cy.get(".product_sort_container").select('Name (Z to A)');
    }
    openCart() {
        cy.get(".shopping_cart_badge").click();
    }
}

export default new InventoryPage();
