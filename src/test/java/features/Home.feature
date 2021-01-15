Feature: Homepage

  Scenario: I want to land in home page
    Then Text displayed with "Automation Testing Practice"

  @test-02
  Scenario: I want to search in the search box

    Then Enter a text input "hasib" in the search box
    And click on search button
    And Search result will be listed as "Hasib"

  @test-03
  Scenario Outline: Volunteer Sign up
    Then Enter Firstname as "<firstName>"
    Then Enter Lastname as "<lastName>"
    Then Enter Phonenumber as "<phone>"
    Then Enter Country name as "<country>"
    Then Enter City name as "<city>"
    Then Enter Email name as "<email>"
    Then Select the Gender as "<gender>"
    Then Select the Days of the week as "Sunday, Monday, Tuesday, Friday"
    Then Select best time to contact as "<time>"
    Then Upload a file
    And click on submit button
    Examples:
      | firstName | lastName | phone     | country    | city  | email             |
      | Hasib     | Rahat    | 019892342 | Bangladesh | Dhaka | hhrahat@gmail.com |

  @test-04
  Scenario: Login thisheart Dashboard

#    Then Click on the copy text button
#    Then Drag the item to drop
#    Then Pick the date

    Then click on advance button
    Then click on back to safe button
    Then Enter user details
    And Click on login
    Then Click on Skip
    Then Text displayed with "ThisHeart- Dashboard"





