const fs = require('fs'), path = require('path');
function loaddir(dir) {
    const obj = {};
    const url = `${process.env.PWD}/${dir}`;
    const files = fs.readdirSync(url)
    for (let file of files) {
        if (! /\.js$/.test(file)) return;
        let name = path.basename(file, path.extname(file));
        obj[name] = require(`${url}/${file}`);
    }
    return obj
}
module.exports = loaddir;