import loginPage from '../../pages/loginpage';
import inventoryPage from '../../pages/InventoryPage';
import cartPage from '../../pages/CartPage';
import checkoutPage from '../../pages/CheckoutPage';

describe('Checkout Page Tests', () => {
     let user;

    beforeEach(() => {
        cy.login();
        cy.fixture('userData').then((data) => {
            user = data;

        // Login before every test
        

        // Navigate to Cart and Checkout
        inventoryPage.addProduct();
        inventoryPage.openCart();
        cartPage.clickCheckout();

        cy.url().should('include', 'checkout-step-one.html');
         });
    });

    it('should complete the checkout process', () => {
        checkoutPage.enterFirstName('Abirami');
        checkoutPage.enterlastname('R');
        checkoutPage.enterPostalCode('621003');
        checkoutPage. continue();

        // Verify on checkout overview page
        cy.url().should('include', 'checkout-step-two.html');

        checkoutPage.finish();

        // Verify order completion page
        cy.url().should('include', 'checkout-complete.html');
        cy.get('.complete-header').should('have.text', 'Thank you for your order!');
    });
});
