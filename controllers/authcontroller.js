var exports = module.exports = {};

exports.signup = function(req, res) {
    res.render('signup');
}

exports.signin = function(req, res) {
    res.render('signin');
}

exports.signup = function(req, res) {
    res.render('signup');
}

exports.home = function(req, res) {
    res.render('lessonHome');
}

exports.logout = function(req, res) {
    req.session.destroy(function(err) {
        res.redirect('/');
    });
}