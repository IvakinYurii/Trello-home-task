const BoardsMenuComponent = require("../components/boardsmenucomponents/boardsmenu.component");
const HeaderComponent = require("../components/common/header.component");

class BoardsMenuPage {
  constructor() {
    this.header = new HeaderComponent();
    this.board = new BoardsMenuComponent();
  }
  async open() {
    await browser.url("/u/ricago6218/boards");
  }
}

module.exports = BoardsMenuPage;
