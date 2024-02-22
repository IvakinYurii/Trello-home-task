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
      submitButton: "button[type='submit']",
      cancel: "[aria-label='Cancel']",
    };
    return $(selectors[param]);
  }

  get cardNames() {
    return $$("a[data-testid='card-name']");
  }
}

module.exports = BoardBody;
