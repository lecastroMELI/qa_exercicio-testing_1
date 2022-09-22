const { Given } = require('@cucumber/cucumber');

Given('I start with {string}', function (initialMessage) {
  console.log(initialMessage);
});

Given('I have the code of an item: {string}', function(itemCode) {
    // Repassa o código do item para o when
    this.itemCode = itemCode;
});

