const mongoose = require('mongoose');
const config = require('../config/config').mongodb;
let dbUrl = 'mongodb://' + config.host + ':' + config.port + '/' + config.db;

mongoose.connect(dbUrl, function (err) {
    if (err) {
        console.log('Error', ' mongoDB 连接错误 ', err);
    }
});

mongoose.connection.on('connected', function () {
    console.log('mongoose connection open to ' + dbUrl);
});

module.exports = mongoose;