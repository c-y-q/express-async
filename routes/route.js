
var expressVerify = require('express-verify');
const loaddir = require('../tool/loaddir');
const httpStatus = loaddir('httpStatus');
module.exports = function (app) {
    console.log(5, httpStatus)
    app.use(function (req, res, next) {
        console.log(8,req.method)
        const url = req.originalUrl.split('/');
        req.fun = url[1];
        req.service = url[2];
        /**
         * 
         * 必须在httpStatus中，配置url,param,method
         */
        console.log(req.fun,req.service)
        const validate = httpStatus[`${req.fun}`] && httpStatus[`${req.fun}`][`${req.service}`] || '';
        console.log(16,validate);
        //验证要访问的api是否存在
        if (!validate) {
            res.json({
                status: 404,
                msg: 'not found !'
            })
            return;
        }
        //api存在，验证请求方式是否正确
        if (!(req.method.toLowerCase() == validate.method)) {
            res.json({
                status: 404,
                msg: 'not found !'
            })
            return;
        }
        if (!(validate.param) || validate.param == {}) {
            next();
        } else {
            app.use(expressVerify(validate.param));
            req.parameter = req.body || req.query || req.param;
            for (let i in req.parameter) {
                let val = req.parameter[i];
                if (typeof val == 'string') {
                    val = val.trim();
                }
                req.parameter[i] = val;//.replace(/(^\s*)|(\s*$)/g, '');
            }
            next();
        }
    });
    // app.use('/carctrl', require('./carctrl'));
    // app.use('/clothctl', require('./clothctl'));
    // app.use('/deviceInfo', require('./deviceInfo'));
    // app.use('/', require('./login'));
    for(let service in httpStatus){
        app.use(`/${service}`,require(`./${service}`));
    }

}