const HomePageComponent = require("./../components/homecomponents/homepage.component");

class HomePage {
  constructor() {
    this.homeComponent = new HomePageComponent();
  }

  async open() {
    await browser.url("https://trello.com/home");
  }
}

module.exports = HomePage;
