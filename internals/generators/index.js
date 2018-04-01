/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const screenGenerator = require('./screen');

module.exports = (plop) => {
    plop.setGenerator('Tạo màn hình', screenGenerator);
};
