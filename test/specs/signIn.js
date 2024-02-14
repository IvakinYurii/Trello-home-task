const signInUser = require("../../signInUser.js");

describe("User Sign In", () => {
  it("should be redirected to the Trello Workspace", async () => {
    await browser.maximizeWindow();
    await signInUser(browser);
    await expect(browser).toHaveUrl("https://trello.com/u/ricago6218/boards");
  });
});
