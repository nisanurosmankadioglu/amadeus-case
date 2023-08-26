Feature: Validation of Different Values in "From" and "To" Fields

  Scenario: Entering the same value in "From" and "To" fields
    Given I am on the application page
    When I click "Istanbul" in the From combobox
    Then I should not be able to click "Istanbul" in To combobox

  Scenario: Entering the same value in "To" and "From" fields
    Given I am on the application page
    When I click "Istanbul" in the To combobox
    Then I should not be able to click "Istanbul" in From combobox