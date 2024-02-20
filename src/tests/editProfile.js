const signInUser = require("../../signInUser.js");

describe("Edit User Profile", () => {
  before(async () => {
    await browser.maximizeWindow();
    await signInUser(browser);
  });

  it("profile should be updated successfully", async () => {
    await browser.url("https://trello.com/u/ricago6218/account");

    const profileAndVisibility = await $("a[data-tab='profile']");
    await profileAndVisibility.click();

    const bio = await $("#bio");
    await bio.setValue("I love Trello boards");

    const submitButton = await $("button[type='submit']");
    await submitButton.click();

    const saveResult = await $("//span[text()='Saved']");
    await saveResult.waitForDisplayed();

    expect(await saveResult.isDisplayed()).to.be.true;
  });
});
