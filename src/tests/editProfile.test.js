const SignInUser = require("../configs/signInUser.js");
const SettingsPage = require("../po/pages/settings.page.js");

const userSignIn = new SignInUser(browser);
const settingsPage = new SettingsPage();

describe("Edit User Profile", () => {
  before(async () => {
    await userSignIn.signIn("ricago6218@giratex.com", "StrongPassword1234");
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
