const { Given } = require('@cucumber/cucumber');
const body = require('../../lib/helpers/bodySample');

Given('I start with {string}', function (initialMessage) {
  this.initialMessage = initialMessage;
});

Given('I have the code of an item: {string}', function (itemCode) {
  this.itemCode = itemCode;
});

Given('One item with the following attributes:', function (table) {
  // const attrs = table.hashes(); TODO: POR NUM CONSOLE LOG PARA VER O QUE É
  this.table = table;
});

Given('I have a sample POST body', function () {
  this.body = body;
});