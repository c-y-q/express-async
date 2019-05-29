const carctrlModel = require('../mongodb/models/carctrl');
const moment = require('moment');
exports.addData = async (firstModel) => {
    const params = {
        deviceSN: firstModel.deviceSN || '',
        firstTime: firstModel.firstTime || moment().format('YYYY-MM-DD HH:mm:ss'),
        tid: firstModel.tid || '',
        ant: firstModel.ant || '',
        rtc: firstModel.rtc || '',
        rssi: firstModel.rssi || '',
        cid: firstModel.cid || '',
        ip: firstModel.ip || '',
        port: firstModel.port || '',
        fpdh: firstModel.fpdh || '',
        hphmxh: firstModel.hphmxh || '',
        syxz: firstModel.syxz || '',
        ccrq: firstModel.ccrq || '',
        gl: firstModel.gl || '',
        hpzl: firstModel.hpzl || '',
        jyyxq: firstModel.jyyxq || '',
        qzbfq: firstModel.qzbfq || '',
        zkzl: firstModel.zkzl || '',
        pl: firstModel.pl || ''
    }
    await carctrlModel.create(params);
}

exports.findByParam = async (param) => {
    try {
        let pageSize = parseInt(param.pageSize || 10);
        let pageNum = parseInt(param.pageNum || 0) - 1;
        let queryParam = {};
        if (param.fpdh) {
            queryParam.fpdh = param.fpdh;
        }
        queryParam.delstaus = false;
        const totalcount = await carctrlModel.count(queryParam);
        let totalPage = Math.ceil(totalcount / pageSize);
        if (pageNum > totalPage) {
            pageNum = totalPage;
        }
        if (pageNum <= 0) {
            pageNum = 0;
        }
        const result = await carctrlModel.find(queryParam).sort({ _id: -1 }).skip(pageNum * pageSize).limit(pageSize);
        return { result, totalPage, pageNum };
    } catch (err) {
        throw new Error(err)
    }
}

exports.delete = async (param) => {
    await carctrlModel.updateOne({ _id: param.id }, {
        $set: {
            delstaus: true,
            operateTime: moment().format('YYYY-MM-DD HH:mm:ss')
        }
    })
}