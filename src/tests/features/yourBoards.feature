@skip
Feature: Test Boards functionality

  Scenario: Create a Board
    Given user is on boards page
    When it initiates board creation
    Then a new board should be created

  Scenario: Create a List
    Given user is on a specific board
    When it initiates list creation
    Then a new list should be added

  Scenario: Create a Card on existing list
    Given user is on a specific board
    When it initiates card creation
    Then a new card should be added

  Scenario: Card Filtering
    Given user is on a specific board
    When it applies a filter of specific criteria
    Then cards matching the criteria should be displayed
