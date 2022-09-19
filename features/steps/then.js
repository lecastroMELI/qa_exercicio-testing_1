const {Then} = require('@cucumber/cucumber');
const assert = require('assert');

const finalMessage = 'Olá mundo';

Then('I end up with {string}', function (expectedResponse) {
    assert.equal(finalMessage, expectedResponse);
});
