const ActiveBoard = require("../pages/activeboard.page");
const BoardsMenuPage = require("../pages/boardsmenu.page");

class DeleteLists {
  constructor() {
    this.boardsMenuPage = new BoardsMenuPage();
    this.activeBoard = new ActiveBoard();
  }
  async delete(boardName, listName) {
    try {
      await this.boardsMenuPage.open();

      await this.boardsMenuPage.board.selectBoard(boardName).click();

      const listTitle = await this.activeBoard.getListByName(listName);
      await listTitle.waitForDisplayed({ timeout: 2000 });

      while (await listTitle.isDisplayed()) {
        const listAction = await this.activeBoard.getListActions(listName);

        await listAction.waitForClickable();
        await listAction.click();

        await this.activeBoard.boardBody.closeListButton.click();

        await browser.pause(500);
      }
    } catch (error) {
      console.error("Error deleting lists:", error);
    }
  }
}

module.exports = DeleteLists;
