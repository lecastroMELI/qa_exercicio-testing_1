const { Given } = require('@cucumber/cucumber');
const body = require('../../lib/helpers/bodySample');

Given('I start with {string}', function (initialMessage) {
  this.initialMessage = initialMessage;
});

Given('I have the code of an item: {string}', function (itemCode) {
  this.itemCode = itemCode;
});

Given('One item with the following attributes:', function (table) {
  // console.log(table.hashes());
  /**
      [
        {
          minPrice: '5500',
          maxPrice: '7000',
          listing_type: 'paid',
          picking_type: 'cross_docking',
          condition: 'new',
          free_shipping: 'true',
          quantity: '1',
          currency: 'ARS',
          category: 'MLA3529'
        }
      ]
   */

  // console.log(table);
  /**
      DataTable {
        rawTable: [
          ['minPrice', 'maxPrice', 'listing_type', 'picking_type', 'condition', 'free_shipping', 'quantity', 'currency', 'category'],
          ['5500', '7000', 'paid', 'cross_docking', 'new', 'true', '1', 'ARS', 'MLA3529']
        ]
      }
   */

  this.table = table.hashes();
});

Given('I generate a data table', function () {
  // console.log(this.table);
});

Given('I have a sample POST body', function () {
  this.body = body;
});