const {Given} = require('@cucumber/cucumber');

Given('I start with {string}', function (initialMessage) {
    console.log(initialMessage);
});
