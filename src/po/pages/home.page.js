const HomePageComponent = require("./../components/homecomponents/homepage.component");

class HomePage {
  constructor() {
    this.homeComponent = new HomePageComponent();
  }

  async open() {
    await browser.url("/home");
  }
}

module.exports = HomePage;
