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

  it.only("new card should be created within the list", async () => {
    await browser.url("https://trello.com/b/E4N8IpFV/new-board");

    const addCardButton = await $("button[data-testid='list-add-card-button']");
    await addCardButton.click();

    const cardTitle = await $(
      "textarea[data-testid='list-card-composer-textarea']"
    );
    await cardTitle.setValue("New card");

    const submitButton = await $("button[type='submit']");
    await submitButton.click();

    const cardNames = await $$("a[data-testid='card-name']");

    let isNewCardPresent = false;
    for (const cardName of cardNames) {
      const cardText = await cardName.getText();
      if (cardText === "New card") {
        isNewCardPresent = true;
        break;
      }
    }

    isNewCardPresent.should.be.true;
  });

  it("new list should be created on the selected board", async () => {
    await browser.url("https://trello.com/b/E4N8IpFV/new-board");

    const listButton = await $("button[data-testid='list-composer-button']");
    await listButton.click();

    const listTitle = await $("textarea[name='Enter list title…']");
    await listTitle.setValue("New list");

    const addListButton = await $(
      "button[data-testid='list-composer-add-list-button']"
    );
    await addListButton.click();

    const listName = await $("//h2[text()='New list']");
    await listName.waitForDisplayed();

    await wdioExpect(listName).toBeDisplayed();
  });

  it("only the cards matching the criteria should be displayed", async () => {
    await browser.url("https://trello.com/b/Cm4a9v9y/my-trello-board");

    const filterButton = await $("button[data-testid='filter-popover-button']");
    await filterButton.click();

    const filterOption = await $("div[title='Cards assigned to me']");
    await filterOption.click();

    const filteredMessage = await $(".e5LZFj7edvnuic");

    expect(await filteredMessage.isDisplayed()).to.equal(true);
  });
});
