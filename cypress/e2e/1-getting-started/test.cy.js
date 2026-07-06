import loginpage from "../../pages/loginpage";

describe('login', () => {

  it('should login successfully', () => {

    loginpage.visit();
    loginpage.enterusername('standard_user');
    loginpage.enterpassword('secret_sauce');
    loginpage.clicklogin();

  });

});
import InventoryPage from "../../pages/InventoryPage";

describe('InventoryPage test',()=>{
  it('should InventoryPage succesfully',()=>{
    InventoryPage.addProduct();
    InventoryPage.removeProduct();
    InventoryPage.sortProducts();
    InventoryPage.openCart();



  });
});
import CartPage from "../../pages/CartPage";

describe('CartPage test',()=>{
  it('should CartPage succesfully',()=>{
    CartPage.clickCheckout();
    CartPage.removeItem();

  });
});
import CheckoutPage from "../../pages/CheckoutPage";

describe('CheckoutPage test',()=>{
  it('should CheckoutPage succesfully',()=>{
    CheckoutPage.enterFirstName('abirami');
    CheckoutPage.enterlastname('r');
    CheckoutPage.enterPostalCode('621003');
    CheckoutPage.continue();
    CheckoutPage.finish();
    CheckoutPage.backToProducts();

  });
});

