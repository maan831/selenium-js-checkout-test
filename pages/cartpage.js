class CartPage{
    constructor(driver){
        this.driver = driver;
    }
    async proceedToCheckout(){
        await this.driver.findElement({id: 'checkout'}).click();
    }

}
module.exports = CartPage;