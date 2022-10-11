require('dotenv').config();

const request = require('supertest');

const api = request(process.env.MELI_API);

const SITES = '/sites';
const MLA = '/MLA';
const SEARCH = '/search?category=';

// TODO: QUAL É O PATH QUE DEVO USAR PARA MONTAR A PESQUISA COM TODOS OS ELEMENTOS QUE VEM DA TABELA?

function itemFilteredGET(table) {
  /** ⚠️ Caso a tabela tenha mais de 1 objeto, o código abaixo deve ser refatorado para atender a essa necessidade
   * porque neste caso, teremos vários path, e portanto temos capturar todos os paths para depois fazer uma requisição
   * para cada um deles. Cada objeto da tabela poderá formar um path diferente.
   * Sugestão de implementação
   * paths = [];
   * paths.push(path)
   * for (const p of paths) {
   *    return api.get(p);
   * }
   * */
  let path = '';

  table.forEach((element) => {
    // path = https://api.mercadolibre.com/sites/MLA/search?category=MLA3529&limit=2
    path = `${SITES}${MLA}${SEARCH}${element.category}&limit=2`;
  });

  return api.get(path);
}

module.exports = {
  itemFilteredGET,
};
