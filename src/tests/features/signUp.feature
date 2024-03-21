Feature: Test Sign Up functionality

  @skip
  Scenario: User Sign Up
    Given user is on signup page
    When it enters valid email
    Then it should be successfully registred
