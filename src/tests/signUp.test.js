const { Key } = require("webdriverio");
const TempMailPage = require("../po/pages/tempmail.page");
const HomePage = require("../po/pages/home.page");
const SignUpPage = require("../po/pages/signup.page");

const tempMailPage = new TempMailPage();
const homePage = new HomePage();
const signUpPage = new SignUpPage();

describe("User Sign Up", () => {
  it("should be successfully registered", async () => {
    await tempMailPage.open();

    if (browser.capabilities.browserName === "firefox") {
      await browser.pause(1000);
      await tempMailPage.headerComponent.button("random").waitForDisplayed();
      await tempMailPage.headerComponent.button("random").click();
    }

    await tempMailPage.headerComponent.button("copy").click();

    await homePage.open();

    await homePage.homeComponent.button("signUp").click();

    await signUpPage.signUpComponent.mailInput.click();
    await browser.keys([Key.Ctrl, "v"]);

    await signUpPage.signUpComponent.submitButton.click();

    await signUpPage.signUpComponent
      .message("error")
      .waitForDisplayed()
      .catch(() => {});

    while (await signUpPage.signUpComponent.message("error").isDisplayed()) {
      await signUpPage.signUpComponent.submitButton.click();
      await browser.pause(1200);
    }

    await signUpPage.signUpComponent
      .message("success")
      .waitForDisplayed()
      .catch(() => {});

    assert(
      await signUpPage.signUpComponent.message("success").isDisplayed(),
      "Welcome to Trello! message is not displayed"
    );
  });
});
