async function deleteCards() {
  try {
    await browser.url("/b/E4N8IpFV/new-board");

    const newCard = $("//a[text()='New card']");
    await newCard.waitForExist({ timeout: 2000 });

    while (await newCard.isDisplayed()) {
      await newCard.click();

      const archive = await $(".js-archive-card");
      await archive.click();

      const deleteCard = await $(".js-delete-card");
      await deleteCard.click();

      const submitBtn = await $(".js-confirm.nch-button");
      await submitBtn.click();

      await browser.pause(500);
    }
  } catch (error) {
    console.error("Error deleting cards:", error);
  }
}

module.exports = deleteCards;
