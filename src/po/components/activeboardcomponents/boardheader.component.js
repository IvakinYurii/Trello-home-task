class BoardHeader {
  item(param) {
    const selectors = {
      title: "[data-testid='board-name-display']",
      filters: "button[data-testid='filter-popover-button']",
      menu: "button[aria-label='Show menu']",
    };
    return $(selectors[param]);
  }
}

module.exports = BoardHeader;
