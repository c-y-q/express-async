const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;
const carctrlService = require('../service/carctrl');

router.get('/getcarInfo', checkLogin, async (req, res, next) => {
		const { result, totalPage, pageNum } = await carctrlService.findByParam(req.body);
		res.json({ status: 200, data: result, totalPage, pageNum })
})

router.post('/delCarInfo', checkLogin, async (req, res, next) => {
		await carctrlService.delete(req.body);
		res.json({ status: 200, msg: 'ok' })
})

router.post('/addCarInfo', checkLogin, async (req, res, next) => {
	await carctrlService.addData(req.body);
	res.json({ status: 200, msg: 'ok' })
})

module.exports = router;
