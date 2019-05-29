module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    if (!req.session.user) {
      console.log('未登录')
      return ;//res.redirect('/login')
    }
    next()
  }
}