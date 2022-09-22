const { Then } = require('@cucumber/cucumber');
const assert = require('assert');

const statusCodes = require('../../lib/helpers/statusCodes');

const finalMessage = 'Olá mundo';

Then('I end up with {string}', function (expectedResponse) {
  assert.equal(finalMessage, expectedResponse);
});

Then('The response status code is: {string}', function (statusCod) {
  // forEachResponse(this, (response) => {
  //     assert(response.status, statusCodes[statusCod]);
  // });

  const data = this.data;

  data.forEach((response) => {
    assert(response.status, statusCodes[statusCod]);
  });
});

Then('The seller_id is: {int}', function (sellerId) {
  const data = this.data;

  data.forEach((response) => {
    assert(response.body.seller_id, sellerId);
  });
});

Then('The category_id is: {string}', function (categoryId) {
  const data = this.data;

  data.forEach((response) => {
    assert(response.body.category_id, categoryId);
  });
});

// function forEachResponse(world, callback) {
//     const responseIndex = world.data[0].length - 1;
//     for (const row of world.data) {
//         const response = row[responseIndex];
//         callback(response);
//     }
// }
