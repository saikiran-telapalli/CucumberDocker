@Regression333
Feature: Sai Test search

  Scenario Outline: sai scenario2
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
    
  Scenario Outline: sai scenario4
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