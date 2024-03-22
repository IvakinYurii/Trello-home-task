const { Before, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../../po/pages/login.page");
const SettingsPage = require("../../po/pages/settings.page");

const userSignIn = new LoginPage();
const settingsPage = new SettingsPage();

Before({ tags: "@EditProfile" }, async () => {
  await userSignIn.signIn(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);
});

When(/^it updates profile information$/, async () => {
  await settingsPage.settingsComponent.menu("profile").click();

  await settingsPage.settingsComponent
    .profileForm("bio")
    .setValue("I love Trello boards");

  await settingsPage.settingsComponent.submitButton.click();

  await settingsPage.settingsComponent.submitResult.waitForDisplayed();
});

Then(/^it should be successfully save changes$/, async () => {
  expect(await settingsPage.settingsComponent.submitResult.isDisplayed()).to.be
    .true;
});
