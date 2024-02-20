class SettingsComponent {
  menu(param) {
    const selectors = {
      profile: "a[data-tab='profile']",
      activity: "a[data-tab='activity']",
      cards: "a[data-tab='cards']",
      settings: "a[data-tab='settings']",
    };
    return $(selectors[param]);
  }

  profileForm(param) {
    const selectors = {
      userName: "#username",
      bio: "#bio",
    };
    return $(selectors[param]);
  }

  get submitButton() {
    return $("button[type='submit']");
  }

  get submitResult() {
    return $("//span[text()='Saved']");
  }
}
module.exports = SettingsComponent;
