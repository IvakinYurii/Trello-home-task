class BoardHeader {
  item(param) {
    const selectors = {
      title: "[data-testid='board-name-display']",
      filters: "button[data-testid='filter-popover-button']",
      menu: "button[aria-label='Show menu']",
    };
    return $(selectors[param]);
  }

  filterOption(param) {
    const selectors = {
      noMembers: "[title='No members']",
      cardsAssignedToMe: "[title='Cards assigned to me']",
      noDates: "[title='No dates']",
      overdue: "[title='Overdue']",
      dueInTheNextDay: "[title='Due in the next day']",
    };
    return $(selectors[param]);
  }

  menuOption(param) {
    const selectors = {
      watch: ".js-board-subscribe",
      copy: ".js-copy-board",
      emailToBoard: ".js-email",
      share: ".js-share",
      close: ".js-close-board",
    };
    return $(selectors[param]);
  }

  get submitCloseButton() {
    return $(".js-confirm");
  }
}

module.exports = BoardHeader;
