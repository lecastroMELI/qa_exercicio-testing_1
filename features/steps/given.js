const { Given } = require('@cucumber/cucumber');
const body = require('../../lib/helpers/bodySample');

Given('I start with {string}', function (initialMessage) {
  this.initialMessage = initialMessage;
});

Given('I have the code of an item: {string}', function (itemCode) {
  this.itemCode = itemCode;
});

Given('I have the following attributes:', function (table) {
  // console.log(table.hashes());
  this.table = table.hashes();
});

// Given('I generate a data table', function () {
//   // console.log(this.table);
// });

Given('I have a sample POST body', function () {
  this.body = body;
});