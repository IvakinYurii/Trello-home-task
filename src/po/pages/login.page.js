const LoginPageComponent = require("./../components/logincomponents/loginpage.component");
const HomePage = require("./home.page");

class LoginPage {
  constructor() {
    this.loginComponent = new LoginPageComponent();
    this.homePage = new HomePage();
  }

  async signIn(login, password) {
    await this.homePage.open();
    await this.homePage.homeComponent.button("logIn").click();
    await this.loginComponent.input("email").setValue(login);
    await this.loginComponent.button("submit").click();
    await this.loginComponent.input("password").waitForDisplayed();
    await this.loginComponent.input("password").setValue(password);
    await this.loginComponent.button("submit").click();
    await this.waitForUrl(`https://trello.com/u/${login.split("@")[0]}/boards`);
  }

  async waitForUrl(url) {
    await browser.waitUntil(async () => {
      return (await browser.getUrl()) === url;
    });
  }
}

module.exports = LoginPage;
