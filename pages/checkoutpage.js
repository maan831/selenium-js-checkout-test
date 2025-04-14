class checkoutPage {
    constructor(driver) {
        this.driver = driver;
    }
    async fillCheckoutForm(firstName, lastName, postalCode) {
        await this.driver.findElement({id: 'first-name'}).sendKeys(firstName);
        await this.driver.findElement({id: 'last-name'}).sendKeys(lastName);
        await this.driver.findElement({id: 'postal-code'}).sendKeys(postalCode);
        await this.driver.findElement({id: 'continue'}).click();
    }
    async finishCheckout(){
        await this.driver.findElement({id: 'finish'}).click();
    }
    async getSuccessMessage(){
        const element = await  this.driver.findElement({className: 'complete-header'});
        return await element.getText();
    }
}
module.exports = checkoutPage;