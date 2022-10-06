const { Then } = require('@cucumber/cucumber');
const assert = require('assert');

const statusCodes = require('../../lib/helpers/statusCodes');

// TODO - REMOVER DEPOIS DA REFATORAÇÃO DAS FUNÇÕES
const forEachResponseBody = (data, key, assertElement) => {
  data.forEach((response) => {
    assert.equal(response.body[key], assertElement);
  });
};

Then('I end up with {string}', function (expectedResponse) {
  assert.equal(
    `${this.initialMessage} ${this.complementMessage}`,
    expectedResponse,
  );
});

// TODO - REFATORAR A CONST
Then('The response status code is: {string}', function (statusCod) {
  const data = this.data;

  data.forEach((response) => {
    assert.equal(response.status, statusCodes[statusCod]);
  });
});

// TODO - REFATORAR
Then('The {string} is: {int}', function (seller_id, id) {
  const data = this.data;
  forEachResponseBody(data, seller_id, id);

  //   data.forEach((response) => {
  //     assert(response.body.seller_id, id);
  //   });
});

// TODO - REFATORAR
Then('The {string} is: {string}', function (category_id, id) {
  const data = this.data;
  forEachResponseBody(data, category_id, id);

  //   data.forEach((response) => {
  //     assert(response.body.category_id, id);
  //   });
});

Then('The pack_id is: {int}', function (pack_id) {
  const { data } = this;
  data.forEach((response) => {
    // console.log(response.body);
    assert.equal(response.body.packs[0].pack_id, pack_id);
  });
});