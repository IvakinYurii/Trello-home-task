class HomePageComponent {
  button(param) {
    const selectors = {
      logIn: "//a[text()='Log in']",
      signUp: "//a[text()='Get Trello for free']",
    };
    return $(selectors[param]);
  }
}

module.exports = HomePageComponent;
