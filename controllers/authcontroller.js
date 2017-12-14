var exports = module.exports = {};

exports.start = function(req, res) {
    res.render('start');
}

exports.signup = function(req, res) {
    res.render('signup');
    req.user
}

exports.signin = function(req, res) {
    res.render('signin');
    req.user
}

exports.home = function(req, res) {
    res.render('lessonHome');
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}