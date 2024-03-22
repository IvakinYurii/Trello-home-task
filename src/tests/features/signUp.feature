@skip
Feature: Test Sign Up functionality

  Scenario: User Sign Up
    Given user is on sign up page
    When it enters valid email
    Then it should be successfully registred
