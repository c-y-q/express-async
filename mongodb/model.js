const conn = require('./conn'), mongoose = require('mongoose');
const schemas = loaddir('mongodb/models');
const model = {};
for (let name in schemas) {
    const schema = new mongoose.Schema([schemas[name]])
    const modeldb = conn.model(name, schema);
    model[name] = modeldb;
}
module.exports = model;