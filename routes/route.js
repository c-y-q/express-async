module.exports = function (app) {
    app.use('/carctrl', require('./carctrl'));
    app.use('/clothctl', require('./clothctl'));
    app.use('/deviceInfo', require('./deviceInfo'));
    app.use('/', require('./login'));
}