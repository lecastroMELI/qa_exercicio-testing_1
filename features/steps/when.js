const { When } = require('@cucumber/cucumber');

const {itemsGET } = require('../../lib/api-controllers/itemAPI');

When('I add {string}', function (complementMessage) {
    this.complementMessage = complementMessage;
});

When('I send a request', async function() {
    itemCode = this.itemCode;
    this.data = [];

    const response = await itemsGET(itemCode);
    // console.log(response);

    this.data.push(response);
});
