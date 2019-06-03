const mongoose = require('mongoose');
const config = require('../config/config').mongodb;
const dbUrl = 'mongodb://' + config.host + ':' + config.port + '/' + config.db;
const conn = mongoose.createConnection(dbUrl,{useNewUrlParser: true });
conn.on('open',function(){
    console.log(`mongoose open on : ${dbUrl}`);
})
conn.on('error',function(err){
 console.log(`mongoose error : ${err}`);
})
module.exports = conn;