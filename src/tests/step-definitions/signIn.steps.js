const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../../po/pages/login.page");

const userSignIn = new LoginPage();

Given(/^user is on login page$/, async () => {});

When(/^it enters valid credentials$/, async () => {
  await userSignIn.signIn(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
});

Then(/^it should be successfully logged in$/, async () => {
  await wdioExpect(browser).toHaveUrl(
    `https://trello.com/u/${process.env.LOGIN_EMAIL.split("@")[0]}/boards`
  );
});
