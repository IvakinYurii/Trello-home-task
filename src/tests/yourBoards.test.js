const LoginPage = require("../po/pages/login.page.js");
const BoardsMenuPage = require("../po/pages/boardsmenu.page.js");
const ActiveBoard = require("../po/pages/activeboard.page.js");
const CloseBoards = require("../po/cleaners/closeBoards.js");
const DeleteCards = require("../po/cleaners/deleteCards.js");
const DeleteLists = require("../po/cleaners/deleteLists.js");

const userSignIn = new LoginPage();
const boardsMenuPage = new BoardsMenuPage();
const activeBoard = new ActiveBoard();
const closeBoards = new CloseBoards();
const deleteCards = new DeleteCards();
const deleteLists = new DeleteLists();

describe("Trello Board Functionality", () => {
  const browserName = browser.capabilities.browserName;

  before(async () => {
    await userSignIn.signIn(
      process.env.LOGIN_EMAIL,
      process.env.LOGIN_PASSWORD
    );
  });

  after(async () => {
    await closeBoards.close("myNewBoard");
    await deleteCards.delete("newBoard", `New card ${browserName}`);
    await deleteLists.delete("newBoard", `New list ${browserName}`);
  });

  it("new board should be created and displayed on your boards", async () => {
    await boardsMenuPage.open();

    await boardsMenuPage.header.menu("create").click();

    await boardsMenuPage.header.createOption("board").click();

    await boardsMenuPage.header
      .createBoard("title")
      .setValue(`My new board ${browserName}`);

    await boardsMenuPage.header.createBoard("submitButton").waitForClickable();
    await boardsMenuPage.header.createBoard("submitButton").click();

    assert.strictEqual(
      await activeBoard.boardHeader.item("title").getText(),
      `My new board ${browserName}`
    );
  });

  it("new card should be created within the list", async () => {
    await boardsMenuPage.open();

    await boardsMenuPage.board.selectBoard("newBoard").click();

    await activeBoard.boardBody.button("addCard").click();

    await activeBoard.boardBody
      .createCard("title")
      .setValue(`New card ${browserName}`);

    await activeBoard.boardBody.createCard("addCardButton").click();

    const isNewCardPresent = await activeBoard.isNewCardPresent(
      `New card ${browserName}`
    );

    isNewCardPresent.should.be.true;
  });

  it("new list should be created on the selected board", async () => {
    await boardsMenuPage.open();

    await boardsMenuPage.board.selectBoard("newBoard").click();

    await activeBoard.boardBody.button("addList").click();

    await activeBoard.boardBody
      .createList("title")
      .setValue(`New list ${browserName}`);

    await activeBoard.boardBody.createList("addListButton").click();

    const listName = await activeBoard.getListByName(`New list ${browserName}`);

    await wdioExpect(listName).toBeDisplayed();
  });

  it("cards matching the criteria should be displayed", async () => {
    await boardsMenuPage.open();

    await boardsMenuPage.board.selectBoard("myTrelloBoard").click();

    await activeBoard.boardHeader.item("filters").click();

    await activeBoard.boardHeader.filterOption("cardsAssignedToMe").click();

    const filteredCard = await activeBoard.isFilterCardDisplayed();

    expect(filteredCard).to.equal(true);
  });
});
