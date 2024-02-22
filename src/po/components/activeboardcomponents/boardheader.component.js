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
}

module.exports = BoardHeader;
