class TempMailHeader {
  button(param) {
    const selectors = {
      copy: "[data-qa='copy-button']",
      refresh: "[data-qa='refresh-button']",
      random: "[data-qa='random-button']",
      change: "[data-qa='change-button']",
      forwarding: ".header-btn.has-tooltip",
      delete: "[data-qa='delete-button']",
    };
    return $(selectors[param]);
  }
}
module.exports = TempMailHeader;
