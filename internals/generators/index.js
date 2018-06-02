/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

const screenGenerator = require('./screen');

module.exports = (plop) => {
    plop.setGenerator('Tạo màn hình', screenGenerator);
};
