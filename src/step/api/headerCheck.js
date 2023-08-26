const { Given, Then } = require("@cucumber/cucumber");

const axios = require('axios');
const assert = require('assert');

let response;

Given('I make GET request to {string}', async function (url) {
  response = await axios.get(url);
});

Then('the response should have a {string} header with value {string}', function (headerName, expectedValue) {
  const contentTypeHeader = response.headers['content-type'];
  assert(contentTypeHeader, 'Response does not have a Content-Type header');
  assert.strictEqual(contentTypeHeader, expectedValue, `Expected ${headerName} header to be ${expectedValue}, but got ${contentTypeHeader}`);
});

