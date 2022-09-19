/* const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

let messagePart1 = '';
let finalMessage = '';

Given('I start with {string}', function (initialMessage) {
  // this.whatIHeard = initialMessage;
  messagePart1 = initialMessage;
});

When('I add {string}', function (complementMessage) {
  // this.finalMessage = `${this.whatIHeard} ${complementMessage}`
  finalMessage = `${messagePart1} ${complementMessage}`;
});

Then('I end up with {string}', function (expectedResponse) {
  // assert.equal(this.finalMessage, expectedResponse);
  assert.equal(finalMessage, expectedResponse);
}); */
