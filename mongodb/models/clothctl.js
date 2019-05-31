module.exports = {
    recognizeCode: { type: String, required: true },//设备序列号例：424C120800012754
    lostTime: { type: Date, default: Date.now },//遗失时间
    electictag: { type: String },//电子标签
    loster: { type: String },//失主
    moblie: { type: String },//手机
    registrant: { type: String },//登记人员
    carStatus: { type: Number }, //车辆状态
    carNumber: { type: String },//车牌,
    operateTime: { type: Date, default: Date.now }, //操作时间
    delstaus: { type: Boolean, default: false } //是否删除
}