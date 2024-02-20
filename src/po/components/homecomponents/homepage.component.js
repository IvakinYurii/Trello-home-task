class HomePageComponent {
  button(param) {
    const selectors = {
      logInButton: "//a[text()='Log in']",
      signUpButton: "//a[text()='Get Trello for free']",
    };
    return $(selectors[param]);
  }
}

module.exports = HomePageComponent;
