class BoardBody {
  button(param) {
    const selectors = {
      addCard: "button[data-testid='list-add-card-button']",
      addList: "button[data-testid='list-composer-button']",
    };
    return $(selectors[param]);
  }

  createCard(param) {
    const selectors = {
      title: "textarea[data-testid='list-card-composer-textarea']",
      addCardButton: "button[type='submit']",
      cancel: "[aria-label='Cancel']",
    };
    return $(selectors[param]);
  }

  createList(param) {
    const selectors = {
      title: "[name='Enter list title…']",
      addListButton: "button[data-testid='list-composer-add-list-button']",
      cancel: "[aria-label='Cancel list editing']",
    };
    return $(selectors[param]);
  }

  cardAction(param) {
    const selectors = {
      archive: ".js-archive-card",
      deleteCard: ".js-delete-card",
      submitButton: ".js-confirm.nch-button",
    };
    return $(selectors[param]);
  }

  get cardNames() {
    return $$("a[data-testid='card-name']");
  }

  get closeListButton() {
    return $(".js-close-list");
  }
}

module.exports = BoardBody;
