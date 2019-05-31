var verifyParam = require('express-verify');
const param = {
	body: {
		deviceSN: {
			number: true,
			length: 1,
			canBeNull:false
		}
	}
}
const addCarInfo = verifyParam(param);
module.exports = {param,addCarInfo};