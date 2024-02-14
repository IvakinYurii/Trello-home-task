const { Key } = require("webdriverio");

describe("User Sign Up", () => {
  it("should be successfully registered", async () => {
    await browser.maximizeWindow();
    await browser.url("https://tempail.com/en/");

    const copyEmail = await $(".adres-input");
    await copyEmail.click();

    await browser.url("https://trello.com/home");

    const getTrello = await $("//a[text()='Get Trello for free']");
    await getTrello.click();

    const emailInput = await $("#email");
    await emailInput.click();
    await browser.keys([Key.Ctrl, "v"]);

    const signUpSubmit = await $("#signup-submit");
    await signUpSubmit.click();

    const success = await $("//h1[text()='Welcome to Trello!']");

    await expect(success).toBeDisplayed();
  });
});
