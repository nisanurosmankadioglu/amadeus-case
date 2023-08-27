const { Given, When, Then, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const assert = require('assert');
const { selectors } = require('../../selectors/flights')

let browser, page;

Given('I am on the application page', async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://flights-app.pages.dev');
});

When('I click {string} in the From combobox', async (value) => {  
  await page.click(selectors.fromButton);
  await page.click(selectors.istanbulChoice1);
});

Then('I should not be able to click {string} in To combobox', async (value) => {
  await page.click(selectors.toButton);
  const toIstanbulElement = await page.$(selectors.istanbulChoice2);
  const isDisabled = await toIstanbulElement.evaluate(el => el.disabled);
  assert.strictEqual(isDisabled, true, 'Expected "To Istanbul" option to be disabled');
  browser.close();
});

When('I click {string} in the To combobox', async (value) => {  
  await page.click(selectors.toButton);
  await page.click(selectors.istanbulChoice1);
});

Then('I should not be able to click {string} in From combobox', async (value) => {
  await page.click(selectors.fromButton);
  const fromIstanbulElement = await page.$(selectors.istanbulChoice2);
  const isDisabled = await fromIstanbulElement.evaluate(el => el.disabled);
  assert.strictEqual(isDisabled, true, 'Expected "From Istanbul" option to be disabled');
  browser.close();
});


When('I click {string} in the To comboboxx', async (value) => {
  await page.click(selectors.toButton);
  await page.waitForSelector(selectors.toDropDown);
  await page.$eval(selectors.toDropDown, (dropdown) => {
    dropdown.scrollBy(0, 100);
  });
  await page.click(selectors.losAngeles);
});

Then('I should see the message {string}', async (expectedMessage) => {
displayedFlightCount = await page.textContent(selectors.flightCountMessage);
});

Then('the displayed flight count should match the actual number of flights', async () => {
const elementCount = await page.$$eval(selectors.elementCountSelector, elements => elements.length);
expect(elementCount).to.equal(displayedFlightCount);

await browser.close();
});