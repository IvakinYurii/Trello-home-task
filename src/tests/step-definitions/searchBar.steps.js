const { Before, Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../../po/pages/login.page");
const BoardsMenuPage = require("../../po/pages/boardsmenu.page");

const userSignIn = new LoginPage();
const boardsMenuPage = new BoardsMenuPage();

Before({ tags: "@SearchBar" }, async () => {
  await userSignIn.signIn(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
});

Given(/^user is on boards page$/, async () => {
  await boardsMenuPage.open();
});

When(/^it searching for a specific board name$/, async () => {
  await boardsMenuPage.header.menu("searchBar").click();

  await browser.pause(1000);

  await boardsMenuPage.header.menu("searchBar").setValue("My Trello board");

  await boardsMenuPage.header.searchResult.waitForDisplayed();
});

Then(/^specific board should appear in search results$/, async () => {
  (await boardsMenuPage.header.searchResult.isDisplayed()).should.be.true;
});
