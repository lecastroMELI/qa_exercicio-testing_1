require('dotenv').config(); // descobri que não precisamos manter em uma variável aqui, mas é necessário importar

const request = require('supertest');

const api = request(process.env.BASE_URL_API);

const PATH_GET = '/items/';
const PATH_POST = '/calculator/pricing';

function itemsGET(itemCode) {
  return api.get(PATH_GET + itemCode);
}

function itemPOST(body) {
  return api.post(PATH_POST).send(body);
}

module.exports = {
  itemsGET,
  itemPOST,
};
