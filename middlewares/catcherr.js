const Layer = require('express/lib/router/layer');
const catchError = Object.defineProperty(Layer.prototype, 'handle', {
    enumerable: true,
    get() {
        return this.__handle;
    },
    set(fn) {
        if (fn.length === 4) {
            this.__handle = fn;
        } else {
            this.__handle = (req, res, next) =>
                Promise.resolve()
                    .then(() => fn(req, res, next))
                    .catch(next);
        }
    },
});
module.exports = catchError;