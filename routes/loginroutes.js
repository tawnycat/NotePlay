var authController = require('../controllers/authcontroller.js');


module.exports = function(app, passport) {
    app.get('/', authController.start)
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }));
    app.get('/home', isLoggedIn, authController.home);
    app.get('/logout', authController.logout);
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}