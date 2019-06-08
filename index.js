var express = require('express');
var session = require('express-session');
var mongoStore = require('connect-mongo')(session);
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var config = require('./config/config');
var routers = require('./routes/route');
var bodyParser = require('body-parser');
require('./middlewares/catcherr');
require('body-parser-xml')(bodyParser);
require('./common/global');
var app = express();
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  name: config.session.key, // 设置 cookie 中保存 session id 的字段名称
  secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  resave: true, // 强制更新 session
  saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
  cookie: {
    maxAge: config.session.maxAge// 过期时间，过期后 cookie 中的 session id 自动删除
  },
  store: new mongoStore({// 将 session 存储到 mongodb
    url: config.mongodb// mongodb 地址
  })
}))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.raw({ limit: '100mb' }));
app.use(bodyParser.text({ limit: '100mb' }));
app.use(bodyParser.xml({
  limit: '100MB',   // Reject payload bigger than 1 MB
  xmlParseOptions: {
    normalize: true,     // Trim whitespace inside text nodes
    normalizeTags: true, // Transform tags to lowercase
    explicitArray: false // Only put nodes in array if >1
  }
}));
//regist all routers
routers(app);

// catch 404 and forward to error handler
app.use(function (res, req, next) {
  var err = new Error()
  err.status = 404;
  err.message = `Not Found !`;
  next(err)
})
// error handler
app.use(function (err, req, res, next) {
  res.json({
    status: err.status || 500,
    router: req.url,
    error: err.stack
  });
  console.error(req.url+'\n'+err.stack);
});

module.exports = app;
