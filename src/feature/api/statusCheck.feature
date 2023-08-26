Feature: API Status Code Check
  As a consumer of the API
  I want to verify that the API returns a 200 status code

  Scenario: Verify API returns a 200 status code
    Given the API endpoint is "https://flights-api.buraky.workers.dev"
    When I make a request to the API
    Then the response status code should be 200
