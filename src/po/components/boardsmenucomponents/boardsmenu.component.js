class BoardsMenuComponent {
  get rootEl() {
    return $(".boards-page-section-header-name");
  }
  activeBoard(param) {
    const selectors = {
      myNewBoard: "[title='My new board']",
      newBoard: "[title='New Board']",
      myTrelloBoard: "[title='My Trello board']",
    };
    return this.rootEl.$(selectors[param]);
  }
}

module.exports = BoardsMenuComponent;
