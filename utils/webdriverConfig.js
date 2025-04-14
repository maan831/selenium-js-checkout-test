const {Builder} =  require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

function getDriver() {
 const service = new chrome.ServiceBuilder(chromedriver.path);
  return new Builder()
    .forBrowser('chrome')
    .setChromeService(service)
    .build();
}

module.exports = getDriver;