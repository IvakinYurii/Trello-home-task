class SignUpComponent {
  get mailInput() {
    return $("#email");
  }

  get submitButton() {
    return $("#signup-submit");
  }

  message(param) {
    const selectors = {
      error: "[data-testid='form-error']",
      success: "//h1[text()='Welcome to Trello!']",
    };
    return $(selectors[param]);
  }
}

module.exports = SignUpComponent;
