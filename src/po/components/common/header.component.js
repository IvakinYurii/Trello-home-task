class HeaderComponent {
  menu(param) {
    const selectors = {
      workspaces: "[title='Workspaces']",
      recent: "[title='Recent']",
      starred: "[title='Starred']",
      templates: "[title='Templates']",
      create: "[aria-label='Create board or Workspace']",
      searchBar: "input[placeholder*='Search']",
    };
    return $(selectors[param]);
  }

  createOption(param) {
    const selectors = {
      board: "//span[text()='Create board']",
      template: "//span[text()='Start with a template']",
      workspace: "//span[text()='Create Workspace']",
    };
    return $(selectors[param]);
  }

  createBoard(param) {
    const selectors = {
      title: "input[data-testid='create-board-title-input']",
      submitButton: "//button[text()='Create']",
    };
    return $(selectors[param]);
  }

  get searchResult() {
    return $("span[name='My Trello board']");
  }
}

module.exports = HeaderComponent;
