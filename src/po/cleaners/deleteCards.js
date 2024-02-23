const ActiveBoard = require("../pages/activeboard.page");
const BoardsMenuPage = require("../pages/boardsmenu.page");

class DeleteCards {
  constructor() {
    this.boardsMenuPage = new BoardsMenuPage();
    this.activeBoard = new ActiveBoard();
  }

  async delete(cardName) {
    try {
      await boardsMenuPage.open();

      await boardsMenuPage.board.selectBoard("newBoard").click();

      const newCard = await activeBoard.selectCard(cardName);
      await newCard.waitForDisplayed({ timeout: 2000 });

      while (await activeBoard.isNewCardPresent(cardName)) {
        await newCard.click();

        await activeBoard.boardBody.cardAction("archive").click();
        await activeBoard.boardBody.cardAction("deleteCard").click();
        await activeBoard.boardBody.cardAction("submitButton").click();

        await browser.pause(500);
      }
    } catch (error) {
      console.error("Error deleting cards:", error);
    }
  }
}

module.exports = DeleteCards;
