const SignInUser = require("../configs/signInUser.js");
const BoardsMenuPage = require("../po/pages/boardsmenu.page.js");

const userSignIn = new SignInUser();
const boardsMenuPage = new BoardsMenuPage();

describe("Search for a Board", () => {
  before(async () => {
    await userSignIn.signIn("ricago6218@giratex.com", "StrongPassword1234");
  });

  it("search results should display the board being searched for", async () => {
    await boardsMenuPage.open();

    await boardsMenuPage.header.menu("searchBar").setValue("My Trello board");

    await boardsMenuPage.header.searchResult.waitForDisplayed();

    (await boardsMenuPage.header.searchResult.isDisplayed()).should.be.true;
  });
});
