
const veryfify = require('../httpStatus/carctrl');
module.exports = function (app) {
    //在中间件中验证参数
    app.use(function (req, res, next) {
        const url = req.originalUrl.split('/');
        req.fun = url[1];
        req.service = url[2];
        const validateParam = veryfify[`${req.service}`];
        if (!validateParam) {
            res.json({
                status: 404,
                msg: 'not found !'
            })
            return;
        }
        if( !(validateParam.param) || validateParam.param == {} ){
            next();
        }else{
            app.use(validateParam);
            req.parameter = req.body || req.query || req.param;
            for (let i in req.parameter) {
                req.parameter[i] = (req.parameter[i]).replace(/(^\s*)|(\s*$)/g, '');
            }
            next();
        }
    });
    app.use('/carctrl', require('./carctrl'));
    app.use('/clothctl', require('./clothctl'));
    app.use('/deviceInfo', require('./deviceInfo'));
    app.use('/', require('./login'));

}