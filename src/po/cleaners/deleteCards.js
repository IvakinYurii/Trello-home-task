const ActiveBoard = require("../pages/activeboard.page");
const BoardsMenuPage = require("../pages/boardsmenu.page");

class DeleteCards {
  constructor() {
    this.boardsMenuPage = new BoardsMenuPage();
    this.activeBoard = new ActiveBoard();
  }

  async delete(boardName, cardName) {
    try {
      await this.boardsMenuPage.open();

      await this.boardsMenuPage.board.selectBoard(boardName).click();

      const newCard = await this.activeBoard.selectCard(cardName);
      await newCard.waitForDisplayed();

      while (await this.activeBoard.isNewCardPresent(cardName)) {
        await newCard.click();

        await this.activeBoard.boardBody.cardAction("archive").click();
        await this.activeBoard.boardBody.cardAction("deleteCard").click();
        await this.activeBoard.boardBody.cardAction("submitButton").click();

        await browser.pause(500);
      }
    } catch (error) {
      console.error("Error deleting cards:", error);
    }
  }
}

module.exports = DeleteCards;
