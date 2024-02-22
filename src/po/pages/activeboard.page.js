const BoardBody = require("../components/activeboardcomponents/boardbody.component");
const BoardHeader = require("../components/activeboardcomponents/boardheader.component");

class ActiveBoard {
  constructor() {
    this.boardHeader = new BoardHeader();
    this.boardBody = new BoardBody();
  }

  async isNewCardPresent(cardName) {
    let isNewCardPresent = false;
    for (const card of await this.boardBody.cardNames) {
      const title = await card.getText();
      if (title === cardName) {
        isNewCardPresent = true;
        break;
      }
    }
    return isNewCardPresent;
  }

  async getListByName(listName) {
    return $(`//h2[text()='${listName}']`);
  }

  async isFilterCardDisplayed() {
    const filteredMessages = await $$(".e5LZFj7edvnuic");
    let counter = 0;

    for (const message of await filteredMessages) {
      const messageText = await message.getText();
      const firstChar = messageText.charAt(0);
      const count = parseInt(firstChar);
      counter += count;
    }

    return counter > 0;
  }
}

module.exports = ActiveBoard;
