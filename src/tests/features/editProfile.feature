Feature: Test Edit Profile functionality

  @EditProfile
  Scenario: Edit User Profile
    Given user is on settings page
    When it updates profile information
    Then it should be successfully save changes