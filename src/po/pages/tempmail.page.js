const TempMailHeader = require("../components/tempmailcomponents/header.component");

class TempMailPage {
  constructor() {
    this.headerComponent = new TempMailHeader();
  }

  async open() {
    await browser.url("https://temp-mail.io/en");
  }
}

module.exports = TempMailPage;
