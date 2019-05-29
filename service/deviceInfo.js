const deviceInfoModel = require('../mongodb/models/deviceInfo');

exports.addData = async (param) => {
    const model = {
        deviceSN: param.deviceSN,
        port: param.port || '',
        ip: param.ip,
        machineNum: param.machineNum || 0
    }
    await deviceInfoModel.create(model);
}

exports.findByParam = async (param) => {
    let pageSize = parseInt(param.pageSize || 10);
    let pageNum = parseInt(param.pageNum || 0) - 1;
    const totalcount = await deviceInfoModel.count(param);
    let totalPage = Math.ceil(totalcount / parseInt(pageSize));
    if (pageNum > totalPage) {
        pageNum = totalPage;
    }
    if (pageNum <= 0) {
        pageNum = 0;
    }
    param.delstaus = false;
    const result = await deviceInfoModel.find(param).sort({ _id: -1 }).skip(pageNum * pageSize).limit(pageSize);
    return { result, totalPage, pageNum };
}

exports.delete = async (id) => {
    await deviceInfoModel.update({ _id: id, delstaus: false }, {
        $set: {
            delstaus: true
        }
    })
}