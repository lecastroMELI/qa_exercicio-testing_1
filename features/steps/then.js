const { Then } = require('@cucumber/cucumber');
const assert = require('assert');

const statusCodes = require('../../lib/helpers/statusCodes');

Then('I end up with {string}', function (expectedResponse) {
  assert.equal(
    `${this.initialMessage} ${this.complementMessage}`,
    expectedResponse,
  );
});

Then('The response status code is: {string}', function (statusCod) {
  const { data } = this;

  data.forEach((response) => {
    assert.equal(response.status, statusCodes[statusCod]);
  });
});

Then('The seller_id is: {int}', function (id) {
  const { data } = this;

  data.forEach((response) => {
    assert(response.body.seller_id, id);
  });
});

Then('The category_id is: {string}', function (id) {
  const { data } = this;

  data.forEach((response) => {
    assert(response.body.category_id, id);
  });
});

Then('The pack_id is: {int}', function (pack_id) {
  const { data } = this;
  data.forEach((response) => {
    // console.log(response.body);
    assert.equal(response.body.packs[0].pack_id, pack_id);
  });
});

Then('The result is: {int}', function (quantity) {
  const { data, table } = this;
  const category = table[0].category;

  data.forEach((response) => {
    // console.log(response.body.results);

    assert.equal(response.body.results.length, quantity);
    assert.equal(response.body.results[0].category_id, category);
    assert.equal(response.body.results[1].category_id, category);
  });
});