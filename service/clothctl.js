const clothctlModel = model.clothctl;
exports.find = async (param) => {
    const { lostTime, carNumber, carStatus } = param;
    let pageSize = parseInt(param.pageSize || 10);
    let pageNum = parseInt(param.pageNum || 0) - 1;
    let queryparam = {};
    if (lostTime) {
        queryparam.lostTime = {
            $gte: new Date(lostTime),
            $lt: new Date(new Date(lostTime).getTime() + 86400000)
        }
    }
    if (carNumber) {
        queryparam.carNumber = {
            $regex: eval(`/${carNumber}/ig`)
        };
    }
    if (carStatus) {
        queryparam.carStatus = carStatus;
    }
    const totalcount = await clothctlModel.count(queryparam);
    let totalPage = Math.ceil(totalcount / pageSize);
    if (pageNum > totalPage) {
        pageNum = totalPage;
    }
    if (pageNum <= 0) {
        pageNum = 0;
    }
    queryparam.delstaus = false;
    const clothctlData = await clothctlModel.find(queryparam).sort({ _id: -1 }).skip(pageNum * pageSize).limit(pageSize);
    let result = [];
    for (let i = 0; i < clothctlData.length; i++) {
        let nowDate = moment(moment().format('YYYY-MM:DD HH:ss:mm'));
        let lostDate = moment(moment(new Date(clothctlData[i].lostTime)).format('YYYY-MM:DD HH:ss:mm'));
        let resData = {
            recognizeCode: clothctlData[i].recognizeCode,
            lostTime: clothctlData[i].lostTime,
            electictag: clothctlData[i].electictag,
            loster: clothctlData[i].loster,
            moblie: clothctlData[i].moblie,
            registrant: clothctlData[i].registrant,
            carStatus: clothctlData[i].carStatus,
            carNumber: clothctlData[i].carNumber,
            lostTotalDay: nowDate.diff(lostDate, 'day')
        }
        result.push(resData)
    }
    return { result, totalPage, pageNum };
}

exports.add = async (param) => {
    const clothParam = { recognizeCode, lostTime, electictag, loster, moblie, registrant, carStatus, carNumber } = param;
    if (recognizeCode) {
        clothParam.recognizeCode = recognizeCode;
    }
    if (lostTime) {
        clothParam.lostTime = moment(new Date(lostTime)).format('YYYY/MM/DD HH:mm:ss');
    }
    if (electictag) {
        clothParam.electictag = electictag;
    }
    if (loster) {
        clothParam.loster = loster;
    }
    if (moblie) {
        clothParam.moblie = moblie;
    }
    if (registrant) {
        clothParam.registrant = registrant;
    }
    if (carStatus) {
        clothParam.carStatus = carStatus;
    }
    if (carNumber) {
        clothParam.carNumber = carNumber;
    }
    await clothctlModel.create(clothParam);
}

exports.editclothctl = async (param) => {
    if (!param.id) {
        throw new Error('lost need param!')
    }
    const clothParam = { recognizeCode, lostTime, electictag, loster, moblie, registrant, carStatus, carNumber } = param;
    if (recognizeCode) {
        clothParam.recognizeCode = recognizeCode;
    }
    if (lostTime) {
        clothParam.lostTime = moment(new Date(lostTime)).format('YYYY-MM-DD HH:mm:ss');
    }
    if (electictag) {
        clothParam.electictag = electictag;
    }
    if (loster) {
        clothParam.loster = loster;
    }
    if (moblie) {
        clothParam.moblie = moblie;
    }
    if (registrant) {
        clothParam.registrant = registrant;
    }
    if (carStatus) {
        clothParam.carStatus = carStatus;
    }
    if (carNumber) {
        clothParam.carNumber = carNumber;
    }
    clothParam.operateTime = moment().format('YYYY-MM-DD HH:mm:ss');
    await clothctlModel.update({ _id: param.id }, { $set: clothParam });
}