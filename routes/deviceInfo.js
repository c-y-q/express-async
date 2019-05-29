const express = require('express');
const moment = require('moment');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;
const deviceInfoService = require('../service/deviceInfo');

router.get('/getcarInfo', checkLogin, async function (req, res, next) {
        const { result, totalPage, pageNum } = await deviceInfoService.findByParam(req.body);
        res.json({ status: 200, data: result, totalPage, pageNum })
   
})

router.post('/delcarInfo', checkLogin, async (req, res, next) => {
        await deviceInfoService.delete(req.body);
        res.json({ status: 200, msg: 'ok' })
    
})

router.post('/addcarInfo', checkLogin, async (req, res, next) => {
        await deviceInfoService.addData(req.body);
        res.json({ status: 200, msg: 'ok' })
})

module.exports = router;
