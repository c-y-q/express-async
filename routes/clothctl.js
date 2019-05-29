const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;
const clothctlService = require('../service/clothctl');

router.post('/findclothctl', checkLogin, async (req, res, next) => {
        const { result, totalPage, pageNum } = await clothctlService.find(req.body,ccccc);
        res.json({ status: 200, data: result, totalPage, pageNum })
})

router.post('/addclothCtl',checkLogin, async (req, res, next) => {
        await clothctlService.add(req.body);
        res.json({ status: 200, msg: 'ok' });
})

router.post('/editclothCtl',checkLogin, async (req, res, next) => {
        await clothctlService.editclothctl(req.body);
        res.json({ status: 200, msg: 'ok' });
})

module.exports = router;

