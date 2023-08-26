Feature: Validation of Displayed Flight Count

  Scenario: Displayed flight count matches the number of items
    Given I am on the application page
    When I click "Istanbul" in the From combobox
    And I click "Los Angeles" in the To comboboxx
    Then I should see the message "Found 2 items"
    And the displayed flight count should match the actual number of flights
