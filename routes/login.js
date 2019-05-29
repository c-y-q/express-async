const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;

router.post('/login', async (req, res, next) => {
    const { userName, passWord } = req.body;
    if (!(userName == 'test' && passWord == 'test123')) {
        res.json({
            status: 400,
            msg: 'account or password wrong !'
        })
    }
    req.session.user = userName;
    res.json({
        status: 200,
        msg: 'ok'
    })
})

router.get('/logout', checkLogin, async (req, res, next) => {
    req.session.user = null;
    res.json({
        status: 200,
        msg: 'ok'
    })
})

module.exports = router;