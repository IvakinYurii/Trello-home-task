async function deleteLists(browser) {
  await browser.url("https://trello.com/b/E4N8IpFV/new-board");
  try {
    const newList = await $("//h2[text()='New list']");
    await newList.waitForDisplayed({ timeout: 5000 });

    while (await newList.isDisplayed()) {
      const editBtn = await $(
        "//div[@data-testid='list-header'][.//h2[text()='New list']]//button[@data-testid='list-edit-menu-button']"
      );

      await editBtn.waitForClickable();
      await editBtn.click();

      const closeList = await $(".js-close-list");
      await closeList.click();

      await browser.pause(500);
    }
  } catch (error) {
    console.error("Error deleting lists:", error);
  }
}

module.exports = deleteLists;
