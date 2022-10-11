require('dotenv').config(); // descobri que não precisamos manter em uma variável aqui, mas é necessário importar

const request = require('supertest');

const api = request(process.env.MELI_API);

const SITES = '/sites';
const MLA = '/MLA';
const SEARCH = '/search?category=';

// QUAL É O PATH QUE DEVO USAR PARA MONTAR A PESQUISA COM TODOS OS ATRIBUTOS QUE VEM DA TABELA?

function itemFilteredGET(table) {
  let path = '';

  table.forEach((element) => {
    path = `${SITES}${MLA}${SEARCH}${element.category}&limit=2`;
  });

  return api.get(path);
}

module.exports = {
  itemFilteredGET,
};
