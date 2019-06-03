module.exports = {
    addCarInfo:{
        method:'post',
        desc:'添加行车轨迹',
        headers:{},
        params:{
            body:{
                ant:{
                    mark: '姓名',
                    number :true,
                    length:10
                }
            }
        },
        response:{
            
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
    delCarInfo:{
        method:'get',
        desc:'删除行车轨迹',
        headers:{},
        params:{
            body:{
                ant:{
                    mark: '姓名',
                    number :true,
                    length:10
                }
            }
        },
        response:{
            
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
    }
}
	