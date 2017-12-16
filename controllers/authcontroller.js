var exports = module.exports = {};

exports.signin = function(req, res) {
    res.render('signin', { layout: 'login' });
}

exports.signup = function(req, res) {
    res.render('signup', { layout: 'login' });
}

exports.home = function(req, res) {
    res.render('lessonHome', { layout: 'lessonHome' });
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}