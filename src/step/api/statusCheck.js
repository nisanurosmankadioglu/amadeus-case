const { Given, When, Then } = require("@cucumber/cucumber");
const axios = require('axios');
const assert = require('assert');

let apiUrl;
let response;


Given('the API endpoint is {string}', function (apiUrl) { 
  apiEndpoint = apiUrl;
});

When('I make a request to the API', async function () {
  response = await axios.get(apiEndpoint);
});

Then('the response status code should be {int}', function (status_code) {
  assert.strictEqual(response.status, status_code, `Expected status code ${status_code}, but got ${response.status}`);
});
