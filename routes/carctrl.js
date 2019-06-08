const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;
const carctrlService = require('../service/carctrl');
const veryfify = require('../httpStatus/carctrl');
const expressVerify = require('express-verify');

router.get('/getcarInfo', async (req, res, next) => {
	const { result, totalPage, pageNum } = await carctrlService.findByParam(req.body);
	res.json({ status: 200, data: result, totalPage, pageNum })
})

router.get('/delCarInfo', expressVerify(veryfify.delCarInfo.params), async (req, res, next) => {
	await carctrlService.delete(req.parameter);
	res.json({ status: 200, msg: 'ok' })
})

router.post('/addCarInfo', expressVerify(veryfify.addCarInfo.params), async (req, res, next) => {
	await carctrlService.addData(req.parameter);
	res.json({ status: 200, msg: 'ok' })
})

module.exports = router;
