const HeaderComponent = require("../components/common/header.component");

class BoardsPage {
  constructor() {
    this.header = new HeaderComponent();
  }
  async open() {
    await browser.url("/u/ricago6218/boards");
  }

  get searchResult() {
    return $("span[name='My Trello board']");
  }
}

module.exports = BoardsPage;
