class LoginPage {
    constructor(driver){
        this.driver = driver;
    }

    async open() {
        await this.driver.get('https://www.saucedemo.com/');
    }

    async login(username, password)  {
        await this.driver.findElement({id: 'user-name'}).sendKeys(username);
        await this.driver.findElement({id: 'password'}).sendKeys(password);
        await this.driver.findElement({id: 'login-button'}).click();
    }
}

module.exports = LoginPage;