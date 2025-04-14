class ProductsPage {
    constructor(driver){
        this.driver = driver;
    }

    async addToCart(productName){
        await this.driver.findElement({ xpath: `//div[text()='${productName}']/ancestor::div[@class='inventory_item']//button`}).click();
    }
    async goToCart(){
        await this.driver.findElement({ className: 'shopping_cart_link'}).click();
    }
}

module.exports = ProductsPage;