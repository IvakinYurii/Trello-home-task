const LoginPage = require("../po/pages/login.page.js");
const SettingsPage = require("../po/pages/settings.page.js");

const userSignIn = new LoginPage();
const settingsPage = new SettingsPage();

describe("Edit User Profile", () => {
  before(async () => {
    await userSignIn.signIn(
      process.env.LOGIN_EMAIL,
      process.env.LOGIN_PASSWORD
    );
  });

  it("profile should be updated successfully", async () => {
    await settingsPage.open();

    await settingsPage.settingsComponent.menu("profile").click();

    await settingsPage.settingsComponent
      .profileForm("bio")
      .setValue("I love Trello boards");

    await settingsPage.settingsComponent.submitButton.click();

    await settingsPage.settingsComponent.submitResult.waitForDisplayed();

    expect(await settingsPage.settingsComponent.submitResult.isDisplayed()).to
      .be.true;
  });
});
