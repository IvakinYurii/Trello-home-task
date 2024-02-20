const signInUser = require("../configs/signInUser.js");

describe("Search for a Board", () => {
  before(async () => {
    await browser.maximizeWindow();
    await signInUser(browser);
  });

  it("search results should display the board being searched for", async () => {
    await browser.url("https://trello.com/u/ricago6218/boards");

    const search = await $("input[placeholder='Search']");
    await browser.pause(500);
    await search.setValue("My Trello board");

    const searchResult = await $("span[name='My Trello board']");
    await searchResult.waitForDisplayed();

    (await searchResult.isDisplayed()).should.be.true;
  });
});
