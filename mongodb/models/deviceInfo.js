module.exports = {
    deviceSN: { type: String, required: true },//设备序列号例：424C120800012754
    port: { type: String, required: true },//端口
    ip: { type: String, required: true },      //tid号538722396d214938
    machineNum: { type: Number, default: 0 },
    delstaus: { type: Boolean, default: false }
}