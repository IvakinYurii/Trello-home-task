class LoginPageComponent {
  input(param) {
    const selectors = {
      email: "#username",
      password: "#password",
    };
    return $(selectors[param]);
  }

  button(param) {
    const selectors = {
      submit: "#login-submit",
    };
    return $(selectors[param]);
  }
}

module.exports = LoginPageComponent;
