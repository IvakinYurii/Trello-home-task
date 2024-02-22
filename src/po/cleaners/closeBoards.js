const ActiveBoard = require("../pages/activeboard.page");
const BoardsMenuPage = require("../pages/boardsmenu.page");

const boardsMenuPage = new BoardsMenuPage();
const activeBoard = new ActiveBoard();

async function closeBoards() {
  try {
    await boardsMenuPage.open();

    await boardsMenuPage.board
      .selectBoard("myNewBoard")
      .waitForDisplayed({ timeout: 2000 });

    while (await boardsMenuPage.board.selectBoard("myNewBoard").isDisplayed()) {
      await boardsMenuPage.board.selectBoard("myNewBoard").click();

      await activeBoard.boardHeader
        .item("menu")
        .click()
        .catch(() => {});

      await activeBoard.boardHeader.menuOption("close").click();

      await activeBoard.boardHeader.submitCloseButton.click();

      await boardsMenuPage.open();
    }
  } catch (error) {
    console.error("Error occurred while closing boards:", error);
  }
}

module.exports = closeBoards;
