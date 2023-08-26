Feature: Testing Content-Type Header

  Scenario: GET request should have "Content-Type" header with value "application/json"
    Given I make GET request to "https://flights-api.buraky.workers.dev"
    Then the response should have a "Content-Type" header with value "application/json"