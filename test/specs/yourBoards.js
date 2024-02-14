const signInUser = require("../../signInUser.js");

describe("Trello Board Functionality", () => {
  before(async () => {
    await browser.maximizeWindow();
    await signInUser(browser);
  });

  it("new board should be created and displayed on your boards", async () => {
    await browser.url("https://trello.com/u/ricago6218/boards");

    const createButton = await $("//p[text()='Create']");
    await createButton.click();

    const createBoardButton = await $("//span[text()='Create board']");
    await createBoardButton.click();

    const boardTitle = await $("input[data-testid='create-board-title-input']");
    await boardTitle.setValue("My new board");

    const submitButton = await $("//button[text()='Create']");
    await submitButton.waitForClickable();
    await submitButton.click();

    const boardName = await $("//h1[text()='My new board']");

    await expect(boardName).toHaveText("My new board");
  });

  it("new card should be created within the list", async () => {
    await browser.url("https://trello.com/b/E4N8IpFV/new-board");

    const addCardButton = await $("button[data-testid='list-add-card-button']");
    await addCardButton.click();

    const cardTitle = await $(
      "textarea[data-testid='list-card-composer-textarea']"
    );
    await cardTitle.setValue("New card");

    const submitButton = await $("button[type='submit']");
    await submitButton.click();

    const cardNames = await $$("a[data-testid='card-name']");

    let isNewCardPresent = false;
    for (const cardName of cardNames) {
      const cardText = await cardName.getText();
      if (cardText === "New card") {
        isNewCardPresent = true;
        break;
      }
    }

    await expect(isNewCardPresent).toBeTruthy();
  });

  it("new list should be created on the selected board", async () => {
    await browser.url("https://trello.com/b/E4N8IpFV/new-board");

    const listButton = await $("button[data-testid='list-composer-button']");
    await listButton.click();

    const listTitle = await $("textarea[name='Enter list title…']");
    await listTitle.setValue("New list");

    const addListButton = await $(
      "button[data-testid='list-composer-add-list-button']"
    );
    await addListButton.click();

    const listName = await $("//h2[text()='New list']");

    await expect(listName).toBeDisplayed();
  });

  it("only the cards matching the criteria should be displayed", async () => {
    await browser.url("https://trello.com/b/Cm4a9v9y/my-trello-board");

    const filterButton = await $("button[data-testid='filter-popover-button']");
    await filterButton.click();

    const filterOption = await $("div[title='Cards assigned to me']");
    await filterOption.click();

    const filteredMessage = await $(".e5LZFj7edvnuic");

    await expect(filteredMessage).toBeDisplayed();
  });
});
