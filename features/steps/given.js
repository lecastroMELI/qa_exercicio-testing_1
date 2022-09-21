const { Given } = require('@cucumber/cucumber');

// EXERCÍCIO 1
Given('I start with {string}', function(initialMessage) {
    console.log(initialMessage);
});

// EXERCÍCIO 2
Given('I have the code of an item: {string}', function(itemCode) {
    // Repassa o código do item para o when
    this.itemCode = itemCode;
});
