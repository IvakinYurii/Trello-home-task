const LoginPage = require("../po/pages/login.page.js");
const BoardsMenuPage = require("../po/pages/boardsmenu.page.js");

const userSignIn = new LoginPage();
const boardsMenuPage = new BoardsMenuPage();

describe("Search for a Board", () => {
  before(async () => {
    await userSignIn.signIn(
      process.env.LOGIN_EMAIL,
      process.env.LOGIN_PASSWORD
    );
  });

  it("search results should display the board being searched for", async () => {
    await boardsMenuPage.open();

    await boardsMenuPage.header.menu("searchBar").click();

    await browser.pause(1000);

    await boardsMenuPage.header.menu("searchBar").setValue("My Trello board");

    await boardsMenuPage.header.searchResult.waitForDisplayed();

    (await boardsMenuPage.header.searchResult.isDisplayed()).should.be.true;
  });
});
