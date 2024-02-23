const ActiveBoard = require("../pages/activeboard.page");
const BoardsMenuPage = require("../pages/boardsmenu.page");

class CloseBoards {
  constructor() {
    this.boardsMenuPage = new BoardsMenuPage();
    this.activeBoard = new ActiveBoard();
  }
  async close() {
    try {
      await this.boardsMenuPage.open();

      await this.boardsMenuPage.board
        .selectBoard("myNewBoard")
        .waitForDisplayed({ timeout: 1000 });

      while (
        await this.boardsMenuPage.board.selectBoard("myNewBoard").isDisplayed()
      ) {
        await this.boardsMenuPage.board.selectBoard("myNewBoard").click();

        await this.activeBoard.boardHeader
          .item("menu")
          .click()
          .catch(() => {});

        await this.activeBoard.boardHeader.menuOption("close").click();

        await this.activeBoard.boardHeader.submitCloseButton.click();

        await this.boardsMenuPage.open();
      }
    } catch (error) {
      console.error("Error occurred while closing boards:", error);
    }
  }
}

module.exports = CloseBoards;
