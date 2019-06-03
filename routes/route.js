
const expressVerify = require('express-verify');
const loaddir = require('../tool/loaddir');
const httpStatus = loaddir('httpStatus');
const jwt = require('jsonwebtoken');
const Redis = require('ioredis');
const redis = new Redis({
        port: 6378,          // Redis port
        host: '127.0.0.1',
        password:123
});  
redis.connect(function(){
    console.log('redis is ok !')
})

module.exports = (app) => {
    app.use(async (req, res, next) => {
        const url = req.originalUrl.split('/');
        req.fun = url[1];
        req.service = url[2];
        /**
         * 
         * 必须在httpStatus中，配置url,param,method
         */
        const validate = httpStatus[`${req.fun}`] && httpStatus[`${req.fun}`][`${req.service}`] || '';
        console.log(16, validate);
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
        redis.hsetnx()
        //验证token必须传时，值是否正确
        if (!(validate.headers == {}) && validate.headers.canBeNull) {
            const paramToken = req.headers.token || req.body.token || req.query.token;
            if (!paramToken) {
                res.json({
                    status: 403,
                    msg: 'lost token param !'
                });
                return;
            }
            if (!certs.public) {
                await loadCert();
            }
            //解密验证token
            let tokenObj = {};
            try {
                tokenObj = jwt.verify(paramToken, certs.public, {
                    algorithm: 'RS512'
                })
            } catch (error) {
                res.json({
                    status: 403,
                    msg: 'token is wrong !',
                    err: error.stack
                });
                return;
            }
          //token正确,验证userId和uuid
        //    if(tokenObj.userId)
        }
        if (!(validate.params) || validate.params == {}) {
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
    for (let service in httpStatus) {
        app.use(`/${service}`, require(`./${service}`));
    }

}