const request = require('supertest');

require('dotenv').config(); // descobri que não precisamos manter em uma variável aqui, mas é necessário importar

const api = request(process.env.BASE_URL_API);

const PATH = '/items/';
const ITEM_CODE = 'MLA1137266571';

function itemsGET() {
    return api.get(PATH + ITEM_CODE);
}

module.exports = {
    itemsGET
};
