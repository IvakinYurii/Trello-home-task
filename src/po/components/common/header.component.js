class HeaderComponent {
  menu(param) {
    const selectors = {
      workspaces: "[title='Workspaces']",
      recent: "[title='Recent']",
      starred: "[title='Starred']",
      templates: "[title='Templates']",
      create: "[aria-label='Create board or Workspace']",
      searchBar: "input[placeholder='Search']",
    };
    return $(selectors[param]);
  }
}

module.exports = HeaderComponent;
