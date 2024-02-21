const HomePage = require("./../po/pages/home.page");
const LoginPage = require("./../po/pages/login.page");

class SignInUser {
  constructor(browser) {
    this.browser = browser;
    this.homePage = new HomePage();
    this.loginPage = new LoginPage();
  }

  async signIn(login, password) {
    await this.homePage.open();
    await this.homePage.homeComponent.button("logIn").click();
    await this.loginPage.signIn(login, password);
    await this.loginPage.getUrl("https://trello.com/u/ricago6218/boards");
  }
}

module.exports = SignInUser;
