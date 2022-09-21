const {Then} = require('@cucumber/cucumber');
const assert = require('assert');

const finalMessage = 'Olá mundo';

Then('I end up with {string}', function (expectedResponse) {
    assert.equal(finalMessage, expectedResponse);
});

// EXERCÍCIO 2
const statusCodes = {
    ok: 200
}

Then ('The response was {string}', function(statusCod) {
    // console.log(this.data[0]);
    // forEachResponse(this, (response) => {
    //     assert(response.status, statusCodes[statusCod]);
    // });

    const data = this.data;

    data.forEach((response) => {
        assert(response.status, statusCodes[statusCod]);
    });
});

// function forEachResponse(world, callback) {
//     const responseIndex = world.data[0].length - 1;
//     for (const row of world.data) {
//         const response = row[responseIndex];
//         callback(response);
//     }
// }