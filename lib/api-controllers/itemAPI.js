require('dotenv').config(); // descobri que não precisamos manter em uma variável aqui, mas é necessário importar

const request = require('supertest');

const api = request(process.env.BASE_URL_API);

const PATH = '/items/';

function itemsGET(itemCode) {
    return api.get(PATH + itemCode);
}

module.exports = {
    itemsGET
};
