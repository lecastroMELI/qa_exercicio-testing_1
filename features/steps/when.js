const { When } = require('@cucumber/cucumber');

const { itemsGET, itemPOST } = require('../../lib/api-controllers/itemAPI');

const { itemFilteredGET } = require('../../lib/api-controllers/itemSearchAPI');

When('I add {string}', function (complementMessage) {
  this.complementMessage = complementMessage;
});

When('I send a request', async function () {
  itemCode = this.itemCode;
  this.data = [];

  const response = await itemsGET(itemCode);
  // console.log(response);

  this.data.push(response);
});

When('I send a request to Items with the sample body', async function () {
  const { body } = this;
  this.data = [];

  const response = await itemPOST(body);
  // console.log(response);
  this.data.push(response);
});

When('I send a request to Items', async function () {
  const { table } = this;
  this.data = [];

  const response = await itemFilteredGET(table);
  // console.log(response);
  this.data.push(response);
});