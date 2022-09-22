const { Given } = require('@cucumber/cucumber');

Given('I start with {string}', function (initialMessage) {
    this.initialMessage = initialMessage;
});

Given('I have the code of an item: {string}', function (itemCode) {
  this.itemCode = itemCode;
});

