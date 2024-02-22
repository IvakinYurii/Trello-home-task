class BoardsMenuComponent {
  get boardList() {
    return $(".boards-page-board-section-list");
  }

  selectBoard(param) {
    const selectors = {
      myNewBoard: "[title='My new board']",
      newBoard: "[title='New Board']",
      myTrelloBoard: "[title='My Trello board']",
    };
    return this.boardList.$(selectors[param]);
  }
}

module.exports = BoardsMenuComponent;
