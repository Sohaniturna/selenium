import {Builder} from 'selenium-webdriver';

// const { Builder } = require("selenium-webdriver");

class Browser {
    constructor() {
        this.driver = new Builder().forBrowser("chrome").build();
    }

    async open() {
        await this.driver.get("https://www.facebook.com/rizveerifat.rizvee");
    }
}

(async () => {
    const browser = new Browser();
    await browser.open();
})();

// const { Builder } = require("selenium-webdriver");

// class Browser {
//     constructor() {
//         this.driver = new Builder().forBrowser("chrome").build();
//     }

//     async open(url) {
//         await this.driver.get(url);
//     }

//     async close() {
//         await this.driver.quit();
//     }
// }

// module.exports = Browser;