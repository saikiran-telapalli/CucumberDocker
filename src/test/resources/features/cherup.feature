@Regression111
Feature: Testing features running

  Scenario Outline: Outline changed the name
    Given I am on the website duck-duck-go
    And   I enter the "<keyword>" to search
    And   I navigate to videos search
    Then  I should get minimum 2 search results

  Examples:
    | keyword    |
    | java       |
    | webdriver  |
    | docker     |
    | kubernetes |