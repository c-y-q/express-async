const loaddir = require('../tool/loaddir');
const httpStatus = loaddir('httpStatus');
const jwt = require('jsonwebtoken');
const Redis = require('ioredis');
const redis = new Redis({
    port: 6378,          // Redis port
    host: '127.0.0.1',
    password: 123
});
redis.connect(function () {
    console.log('redis is ok !')
})

module.exports = (app) => {
    app.use(async (req, res, next) => {
        let url = req.originalUrl.split('/');
        if(url[2].indexOf('?')!= -1){
           url[2] =url[2].split('?')[0];
        }
        req.fun = url[1];
        req.service = url[2];
        req.parameter = req.method == 'GET' ? req.query : req.method == 'POST' ? req.body : req.param;
        const validate = httpStatus[`${req.fun}`] && httpStatus[`${req.fun}`][`${req.service}`] || '';
        //验证token必须传时，值是否正确
        // if (!(validate.headers == {}) && validate.headers.token&&validate.headers.token[0]==1) {
        //     const paramToken = req.headers.token || req.body.token || req.query.token;
        //     if (!paramToken) {
        //         res.json({
        //             status: 403,
        //             msg: 'lost token param !'
        //         });
        //         return;
        //     }
        //     if (!certs.public) {
        //         await loadCert();
        //     }
        //     //解密验证token
        //     let tokenObj = {};
        //     try {
        //         tokenObj = jwt.verify(paramToken, certs.public, {
        //             algorithm: 'RS512'
        //         })
        //     } catch (error) {
        //         res.json({
        //             status: 403,
        //             msg: 'token is wrong !',
        //             err: error.stack
        //         });
        //         return;
        //     }
        //   //token正确,验证userId和uuid
        // //    if(tokenObj.userId)
        // }
        if (!(validate.params) || validate.params == {}) {
            next();
        } else {
            for (let i in req.parameter) {
                if (i == 'token') {
                    continue;
                }
                let val = req.parameter[i];
                if (typeof val == 'string') {
                    val = val.trim();
                }
                req.parameter[i] = val;
            }
            next();
        }
    });
    for (let service in httpStatus) {
        app.use(`/${service}`, require(`./${service}`));
    }

}