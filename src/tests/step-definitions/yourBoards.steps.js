const { Before, After, Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../../po/pages/login.page");
const BoardsMenuPage = require("../../po/pages/boardsmenu.page");
const ActiveBoard = require("../../po/pages/activeboard.page");
const CloseBoards = require("../../po/cleaners/closeBoards");
const DeleteCards = require("../../po/cleaners/deleteCards");
const DeleteLists = require("../../po/cleaners/deleteLists");
const SettingsPage = require("../../po/pages/settings.page");
const HomePage = require("../../po/pages/home.page");

const userSignIn = new LoginPage();
const boardsMenuPage = new BoardsMenuPage();
const activeBoard = new ActiveBoard();
const closeBoards = new CloseBoards();
const deleteCards = new DeleteCards();
const deleteLists = new DeleteLists();
const settingsPage = new SettingsPage();
const homePage = new HomePage();

const pages = {
  settings: settingsPage,
  boards: boardsMenuPage,
  login: homePage,
};

const browserName = browser.capabilities.browserName;
let hasRun = false;

Before({ tags: "@Boards" }, async () => {
  if (!hasRun) {
    hasRun = true;
    await userSignIn.signIn(
      process.env.LOGIN_EMAIL,
      process.env.LOGIN_PASSWORD
    );
  }
});

After({ tags: "@CreateBoard" }, async () => {
  await closeBoards.close("myNewBoard");
});

After({ tags: "@CreateCard" }, async () => {
  await deleteCards.delete("newBoard", `New card ${browserName}`);
});

After({ tags: "@CreateList" }, async () => {
  await deleteLists.delete("newBoard", `New list ${browserName}`);
});

Given(/^user is on (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^it initiates board creation$/, async () => {
  await boardsMenuPage.header.menu("create").click();

  await boardsMenuPage.header.createOption("board").click();

  await boardsMenuPage.header
    .createBoard("title")
    .setValue(`My new board ${browserName}`);

  await boardsMenuPage.header.createBoard("submitButton").waitForClickable();
  await boardsMenuPage.header.createBoard("submitButton").click();
});

Then(/^a new board should be created$/, async () => {
  assert.strictEqual(
    await activeBoard.boardHeader.item("title").getText(),
    `My new board ${browserName}`
  );
});

Given(/^user is on a (\w+) board$/, async (boardName) => {
  await boardsMenuPage.open();

  await boardsMenuPage.board.selectBoard(boardName).click();
});

When(/^it initiates list creation$/, async () => {
  await activeBoard.boardBody.button("addList").click();

  await activeBoard.boardBody
    .createList("title")
    .setValue(`New list ${browserName}`);

  await activeBoard.boardBody.createList("addListButton").click();
});

Then(/^a new list should be added$/, async () => {
  const listName = await activeBoard.getListByName(`New list ${browserName}`);

  await wdioExpect(listName).toBeDisplayed();
});

When(/^it initiates card creation$/, async () => {
  await activeBoard.boardBody.button("addCard").click();

  await activeBoard.boardBody
    .createCard("title")
    .setValue(`New card ${browserName}`);

  await activeBoard.boardBody.createCard("addCardButton").click();
});

Then(/^a new card should be added$/, async () => {
  const isNewCardPresent = await activeBoard.isNewCardPresent(
    `New card ${browserName}`
  );

  isNewCardPresent.should.be.true;
});

When(/^it applies a filter of specific criteria$/, async () => {
  await activeBoard.boardHeader.item("filters").click();

  await activeBoard.boardHeader.filterOption("cardsAssignedToMe").click();
});

Then(/^cards matching the criteria should be displayed$/, async () => {
  const filteredCard = await activeBoard.isFilterCardDisplayed();

  expect(filteredCard).to.equal(true);
});
