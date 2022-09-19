const {When} = require('@cucumber/cucumber');

When('I add {string}', function (complementMessage) {
    console.log(complementMessage);
});
