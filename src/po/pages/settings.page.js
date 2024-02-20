const SettingsComponent = require("../components/settingscomponents/settings.component");

class SettingsPage {
  constructor() {
    this.settingsComponent = new SettingsComponent();
  }

  async open() {
    await browser.url("https://trello.com/u/ricago6218/account");
  }
}

module.exports = SettingsPage;
