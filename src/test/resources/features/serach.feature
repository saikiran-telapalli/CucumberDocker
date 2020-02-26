@Regression222
Feature: Sai Test search

  Scenario Outline: sai scenario1
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