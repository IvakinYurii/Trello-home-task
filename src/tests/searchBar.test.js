const SignInUser = require("../configs/signInUser.js");
const BoardsPage = require("../po/pages/boards.page.js");

const userSignIn = new SignInUser(browser);
const boardsPage = new BoardsPage();

describe("Search for a Board", () => {
  before(async () => {
    await browser.maximizeWindow();
    await userSignIn.signIn("ricago6218@giratex.com", "StrongPassword1234");
  });

  it("search results should display the board being searched for", async () => {
    await boardsPage.open();

    await boardsPage.header.menu("searchBar").setValue("My Trello board");

    await boardsPage.searchResult.waitForDisplayed();

    (await boardsPage.searchResult.isDisplayed()).should.be.true;
  });
});
