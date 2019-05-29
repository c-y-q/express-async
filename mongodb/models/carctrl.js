const conn = require('../conn'), mongoose = require('mongoose');
const carctrlSchema = new mongoose.Schema({
	deviceSN: { type: String, required: true },//设备序列号例：424C120800012754
	firstTime: { type: Date, required: true },//首次过车时间 例：2019-5-20 13:14:30
	tid: { type: String, required: true },      //tid号538722396d214938
	ant: { type: String, required: true },      //天线号组 1
	rtc: { type: String, required: true },      //RTC设备时间NumberLong(946684885922)
	rssi: { type: Number, required: true },     //波特率
	cid: { type: String, required: true },       // 24
	ip: { type: String, required: true },        //ip地址
	port: { type: String, required: true },
	fpdh: { type: String, required: true },     //发牌代号 例：苏A
	hphmxh: { type: String, required: true }, //号牌号码序号	例：AB0123
	syxz: { type: String },                   //使用性质	例：出租，货运
	ccrq: { type: String, required: true }, //出厂日期例：2016.01
	gl: { type: String, required: true }, //功率	单位为千瓦时
	pl: { type: String, required: true }, //排量	单位为百毫升。
	hpzl: { type: String, required: true }, //号牌种类	例：警用汽车
	jyyxq: { type: String, required: true },//检验有效期	例：2020.12
	qzbfq: { type: String, required: true },//强制报废期	例：8年
	zkzl: { type: Number, required: true },//核定载客/总质量 "69"
	qzbfq: { type: String },//车身颜色	例：白，蓝
	delstaus: { type: Boolean, default: false },//是否删除
	operateTime: { type: Date, default: Date.now } //操作时间
})
const carctlModel = conn.model('carctrls', carctrlSchema);
module.exports = carctlModel;
