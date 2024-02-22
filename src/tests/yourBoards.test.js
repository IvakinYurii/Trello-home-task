const SignInUser = require("../configs/signInUser.js");
const BoardsMenuPage = require("../po/pages/boardsmenu.page.js");
const ActiveBoard = require("../po/pages/activeboard.page.js");
const closeBoards = require("../po/cleaners/closeBoards.js");
const deleteCards = require("../po/cleaners/deleteCards.js");
const deleteLists = require("../po/cleaners/deleteLists.js");

const userSignIn = new SignInUser(browser);
const boardsMenuPage = new BoardsMenuPage();
const activeBoard = new ActiveBoard();

describe("Trello Board Functionality", () => {
  before(async () => {
    await userSignIn.signIn("ricago6218@giratex.com", "StrongPassword1234");
    await closeBoards(browser);
    await deleteCards(browser);
    await deleteLists(browser);
  });

  it("new board should be created and displayed on your boards", async () => {
    await boardsMenuPage.open();

    await boardsMenuPage.header.menu("create").click();

    await boardsMenuPage.header.createOption("board").click();

    await boardsMenuPage.header.createBoard("title").setValue("My new board");

    await boardsMenuPage.header.createBoard("submitButton").waitForClickable();
    await boardsMenuPage.header.createBoard("submitButton").click();

    assert.strictEqual(
      await activeBoard.boardHeader.item("title").getText(),
      "My new board"
    );
  });

  it("new card should be created within the list", async () => {
    await boardsMenuPage.open();

    await boardsMenuPage.board.selectBoard("newBoard").click();

    await activeBoard.boardBody.button("addCard").click();

    await activeBoard.boardBody.createCard("title").setValue("New card");

    await activeBoard.boardBody.createCard("addCardButton").click();

    const isNewCardPresent = await activeBoard.isNewCardPresent("New card");

    isNewCardPresent.should.be.true;
  });

  it("new list should be created on the selected board", async () => {
    await boardsMenuPage.open();

    await boardsMenuPage.board.selectBoard("newBoard").click();

    await activeBoard.boardBody.button("addList").click();

    await activeBoard.boardBody.createList("title").setValue("New list");

    await activeBoard.boardBody.createList("addListButton").click();

    const listName = await activeBoard.getListByName("New list");

    await wdioExpect(listName).toBeDisplayed();
  });

  it("cards matching the criteria should be displayed", async () => {
    await boardsMenuPage.open();

    await boardsMenuPage.board.selectBoard("myTrelloBoard").click();

    await activeBoard.boardHeader.item("filters").click();

    await activeBoard.boardHeader.filterOption("cardsAssignedToMe").click();

    const filteredCard = await activeBoard.isFilterCardDisplayed();

    expect(await filteredCard).to.equal(true);
  });
});
