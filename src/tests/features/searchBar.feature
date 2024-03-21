Feature: Test Search Bar functionality

  @SearchBar
  Scenario: Search for a Board
    Given user is on boards page
    When it searching for a specific board name
    Then specific board should appear in search results
