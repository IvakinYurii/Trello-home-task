async function closeBoards(browser) {
  try {
    await browser.url("/b/E4N8IpFV/new-board");

    const boardMenu = await $("[data-testid='open-boards-link']");
    await boardMenu.click();

    const newBoard = await $(
      ".boards-page-board-section-list [title='My new board']"
    );
    await newBoard.waitForDisplayed({ timeout: 2000 });

    while (await newBoard.isDisplayed()) {
      await newBoard.click();

      const menuBtn = await $("button[aria-label='Show menu']");
      await menuBtn.waitForClickable();
      await menuBtn.click();

      const closeBoard = await $(".js-close-board");
      await closeBoard.click();

      const closeConfirm = await $(".js-confirm");
      await closeConfirm.click();

      await browser.pause(500);

      await boardMenu.click();
    }
  } catch (error) {
    console.error("Error occurred while closing boards:", error);
  }
}

module.exports = closeBoards;
