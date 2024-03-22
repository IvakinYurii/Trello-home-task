Feature: Test Sign In functionality

  Scenario: User Sign In
    Given user is on login page
    When it enters valid credentials
    Then it should be successfully logged in
