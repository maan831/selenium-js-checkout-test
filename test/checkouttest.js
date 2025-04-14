const {expect}  =  require('chai');
const getDriver = require('../utils/webdriverConfig');
const LoginPage = require('../pages/loginpage');
const ProductsPage = require('../pages/productspage');
const CartPage = require('../pages/cartpage');
const CheckoutPage = require('../pages/checkoutpage');

describe('E-commerce Checkout Flow', function () {
    this.timeout(30000);
     let driver, loginpage, productspage, cartpage, checkoutpage;
     before(async ()=>{
        driver =  getDriver();
        loginpage = new LoginPage(driver);
        productspage = new ProductsPage(driver);
        cartpage = new CartPage(driver);
        checkoutPage = new CheckoutPage(driver);
     });
     it('should complete checkout successfully', async ()=>{
        await loginpage.open();
        await loginpage.login('standard_user', 'secret_sauce');

        await productspage.addToCart('Sauce Labs Backpack');
        await productspage.goToCart();

        await cartpage.proceedToCheckout();
        await checkoutPage.fillCheckoutForm('manmeet', 'singh', '12345');
        await checkoutPage.finishCheckout();

        const message = await checkoutPage.getSuccessMessage();
        expect(message).to.equal('Thank you for your order!');
     });
     after(async () => {
        await driver.quit();
     });
});