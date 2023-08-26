const axios = require('axios');
const { Given, Then } = require("@cucumber/cucumber");
const { expect } = require('chai');

let apiResponse;

Given('I make a GET request to the API', async function () {
  const apiUrl = process.env.API_URL;
  apiResponse = await axios.get(apiUrl);
});

Then('the response should have the correct structure', function () {
  const responseData = apiResponse.data;

  expect(responseData).to.be.an('object');
  expect(responseData).to.have.property('data').that.is.an('array');

  for (const flight of responseData.data) {
    expect(flight).to.be.an('object');
    expect(flight).to.have.property('id').that.is.a('number');
    expect(flight).to.have.property('from').that.is.a('string');
    expect(flight).to.have.property('to').that.is.a('string');
    expect(flight).to.have.property('date').that.is.a('string');
  }
});
