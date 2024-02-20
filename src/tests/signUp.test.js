const { Key } = require("webdriverio");

describe("User Sign Up", () => {
  it("should be successfully registered", async () => {
    await browser.maximizeWindow();
    await browser.url("https://temp-mail.io/en");

    if (browser.capabilities.browserName === "firefox") {
      await browser.pause(1000);
      const newRandomName = await $("[data-qa='random-button']");
      await newRandomName.waitForDisplayed();
      await newRandomName.click();
    }

    const copyEmail = await $("[data-qa='copy-button']");
    await browser.pause(500);
    await copyEmail.click();

    await browser.url("https://trello.com/home");

    const getTrello = await $("//a[text()='Get Trello for free']");
    await getTrello.click();

    const emailInput = await $("#email");
    await emailInput.click();
    await browser.keys([Key.Ctrl, "v"]);

    const signUpSubmit = await $("#signup-submit");
    await signUpSubmit.click();

    const error = await $("[data-testid='form-error']");
    await error.waitForDisplayed().catch(() => {});

    while (await error.isDisplayed()) {
      await signUpSubmit.click();
      await browser.pause(1200);
    }

    const success = await $("//h1[text()='Welcome to Trello!']");
    await success.waitForDisplayed().catch(() => {});

    assert(
      await success.isDisplayed(),
      "Welcome to Trello! message is not displayed"
    );
  });
});
