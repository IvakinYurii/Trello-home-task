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
}

module.exports = ActiveBoard;
