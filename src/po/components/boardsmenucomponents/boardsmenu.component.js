class BoardsMenuComponent {
  get boardList() {
    return $(".boards-page-board-section.mod-no-sidebar:nth-child(2)");
  }

  selectBoard(param) {
    const selectors = {
      myNewBoard: `[title='My new board ${browser.capabilities.browserName}']`,
      newBoard: "[title='New Board']",
      myTrelloBoard: "[title='My Trello board']",
    };
    return this.boardList.$(selectors[param]);
  }
}

module.exports = BoardsMenuComponent;
