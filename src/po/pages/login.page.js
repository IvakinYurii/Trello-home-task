const LoginPageComponent = require("./../components/logincomponents/loginpage.component");

class LoginPage {
  constructor() {
    this.loginComponent = new LoginPageComponent();
  }

  async signIn(login, password) {
    await this.loginComponent.input("email").setValue(login);
    await this.loginComponent.button("submit").click();
    await this.loginComponent.input("password").waitForDisplayed();
    await this.loginComponent.input("password").setValue(password);
    await this.loginComponent.button("submit").click();
  }

  async getUrl(url) {
    await browser.waitUntil(async () => {
      return (await browser.getUrl()) === url;
    });
  }
}

module.exports = LoginPage;
