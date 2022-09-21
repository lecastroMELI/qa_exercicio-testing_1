const {When} = require('@cucumber/cucumber');

const {itemsGET} = require('../../lib/api-controllers/itemAPI');

// EXERCÍCIO 1
When('I add {string}', function (complementMessage) {
    console.log(complementMessage);
});

// EXERCÍCIO 2
When('I send a request', async function () {
    this.data = [];

    const response = await itemsGET();
    // console.log(response);

    this.data.push(response);
});