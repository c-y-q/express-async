module.exports = {
      login:{
        method:'post',
        desc:'用户登录',
        headers:{
            token:{
                canBeNull:false
            }
        },
        params:{
            body:{
                userName:{
                    mark:'用户姓名',
                    canBeNull:false,
                    minLength:2
                }
            }
        },
        response:{},
        resdec:{}
      }
}