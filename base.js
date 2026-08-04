import {Builder,By} from 'selenium-webdriver';


class Browser {
    constructor() {
        this.driver = new Builder().forBrowser("chrome").build();
        
        }
        // browser open 
    async open() {
        await this.driver.get("https://demowebshop.tricentis.com/");
        await this.driver.manage().window().maximize();
    }

      

 async clickRegister() {
         await this.driver.findElement(By.xpath("//a[text()='Register']")).click();

     }
        


async gender() {

    await this.driver.findElement(By.id("gender-female")).click();
}


async enterFirstName() {
    await this.driver.findElement(By.id("FirstName")).sendKeys("Sohani");
}
async enterLastName() {
    await this.driver.findElement(By.id("LastName")).sendKeys("Fatehin");
}

async enterEmail() {
    await this.driver.findElement(By.id("Email")).sendKeys("sohani@email.com");
}

async enterPassword() {
    await this.driver.findElement(By.id("Password")).sendKeys("123456");
}

async enterConfirmPassword() {
    await this.driver.findElement(By.id("ConfirmPassword")).sendKeys("123456");
}

async clickRegisterButton() {
    await this.driver.findElement(By.id("register-button")).click();
}


// browser close

async close() {
    await this.driver.quit();
}


}

   (async () => {
    const browser = new Browser();
     
    await browser.open();
    await browser.clickRegister();
    await browser.gender();
    // console.log("Gender selected");

    await browser.enterFirstName();
    // console.log("First name entered");

    await browser.enterLastName();
    // console.log("Last name entered");

    await browser.enterEmail();
    await browser.enterPassword();
    await browser.enterConfirmPassword();
    await browser.clickRegisterButton();
    // await browser.close(); 
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

const fruits = ["Apple", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

