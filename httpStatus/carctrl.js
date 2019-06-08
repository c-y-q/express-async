module.exports = {
    addCarInfo: {
        method: 'post',
        desc: '添加行车轨迹',
        headers: {
             token: [1, 'String', '用户认证标志']
        },
        params: {
            body: {
                ant: {
                    mark: '数量',
                    canBeNull: false,
                    number: true,
                    maxNumber: 99,
                    minNumber: 1
                },
                phone: {
                    canBeNull: false,
                    mark: '电话号码',
                    phone: true
                },
                name: {
                    mark: '姓名',
                    canBeNull: false,
                    minLength: 2,
                    maxLength: 10,
                },
                idCard: {
                    mark: '身份证号',
                    canBeNull: false,
                    idCard: true
                },
                bankcode: {
                    mark: '银行卡号',
                    canBeNull: false,
                    bankCard: true
                },
                email: {
                    mark: '邮箱',
                    canBeNull: true,
                    email: true
                },
                verifyCode: {
                    length: 6,
                    canBeNull: false
                },
                ids: {
                    mark: '数组ids',
                    Array: true
                },
                pageSize: {
                    mark: '每页显示几条',
                    default: 1,
                    canBeNull: true
                }
            }
        },
        response: {
            "_id": "5cecf41c14a4846cf38370ed",
            "ccrq": "Mon May 20 2019 11:33:23 GMT+0800 (GMT+08:00)",
            "cllx": "警用车",
            "csys": "红色",
            "fpdh": "苏C",
            "gl": "60",
            "hphmxh": "03124",
            "hpzl": "0001",
            "jyyxq": "Thu Nov 01 2012 00:00:00 GMT+0800 (GMT+08:00)",
            "pl": "",
            "qzbfq": "Sat Nov 01 2031 00:00:00 GMT+0800 (GMT+08:00)",
            "syxz": "货运",
            "zkzl": "69",
            "idCard": "130409199901012034",
            "name": "哈哈",
            "phoneNum": "18233569090"
        }
    },
    delCarInfo: {
        method: 'get',
        desc: '删除行车轨迹',
        headers: {
            token:[1,'String','用户认证']
        },
        params: {
            query: {
                ant: {
                     canBeNull: false,
                    mark: '姓名',
                    number: true,
                    // length: 10
                },
                ass:{
                    canBeNull:false,
                    Array:true
                }
            }
        },
        response: {
            "_id": "5cecf41c14a4846cf38370ed",
            "ccrq": "Mon May 20 2019 11:33:23 GMT+0800 (GMT+08:00)",
            "cllx": "警用车",
            "csys": "红色",
            "fpdh": "苏C",
            "gl": "60",
            "hphmxh": "03124",
            "hpzl": "0001",
            "jyyxq": "Thu Nov 01 2012 00:00:00 GMT+0800 (GMT+08:00)",
            "pl": "",
            "qzbfq": "Sat Nov 01 2031 00:00:00 GMT+0800 (GMT+08:00)",
            "syxz": "货运",
            "zkzl": "69",
            "idCard": "130409199901012034",
            "name": "哈哈",
            "phoneNum": "18233569090"
        },
        resDesc: {
            cllx: ['String', '警用车']
        }
    }
}
