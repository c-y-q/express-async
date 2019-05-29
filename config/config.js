module.exports = {
  session: {
    secret: 'testcharts',
    key: 'testcharts',
    maxAge: 2592000000
  },
  mongodb: {
    host: 'localhost',
    port: 27017,
    db: 'car',
    opt: {
      useNewUrlParser: true,
      autoIndex: false,   //禁止自动建立索引，生产系统下会降低性能，应该在Schema中制定索引策略
      poolSize: 10,      //连接池，默认5，提高到10
      bufferMaxEntries: 0,       //连接错误时立即返回，不等待重连,要配合Schema中的bufferCommands:false使用
      auto_reconnect: true,
    }
  },
  activemq:{
    host: '127.0.0.1',
    port: 61613,
    connectHeaders:{
      login: 'admin',
      passcode: 'admin'
    }
  }
}
