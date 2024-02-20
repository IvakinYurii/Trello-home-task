const SignInUser = require("../configs/signInUser.js");

const userSignIn = new SignInUser(browser);

describe("User Sign In", () => {
  it("should be redirected to the Trello Workspace", async () => {
    await browser.maximizeWindow();
    await userSignIn.signIn("ricago6218@giratex.com", "StrongPassword1234");

    await wdioExpect(browser).toHaveUrl(
      "https://trello.com/u/ricago6218/boards"
    );
  });
});
