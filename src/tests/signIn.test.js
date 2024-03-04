const LoginPage = require("../po/pages/login.page");

const userSignIn = new LoginPage();

describe("User Sign In", () => {
  it("should be redirected to the Trello Workspace", async () => {
    await userSignIn.signIn(
      process.env.LOGIN_EMAIL,
      process.env.LOGIN_PASSWORD
    );

    await wdioExpect(browser).toHaveUrl(
      `https://trello.com/u/${process.env.LOGIN_EMAIL.split("@")[0]}/boards`
    );
  });
});
