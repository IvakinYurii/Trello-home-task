async function signInUser(browser) {
  await browser.url("https://trello.com/home");

  const logInButton = await $('//a[text()="Log in"]');
  await logInButton.click();

  const emailInput = await $("#username");
  await emailInput.setValue("ricago6218@giratex.com");

  const loginSubmit = await $("#login-submit");
  await loginSubmit.click();

  const passwordInput = await $("#password");
  await passwordInput.waitForDisplayed();
  await passwordInput.setValue("StrongPassword1234");
  await loginSubmit.click();

  await browser.waitUntil(async () => {
    return (
      (await browser.getUrl()) === "https://trello.com/u/ricago6218/boards"
    );
  });
}

module.exports = signInUser;
