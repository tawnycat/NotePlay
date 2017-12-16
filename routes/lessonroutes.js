var lessonController = require('../controllers/lessonController.js');

module.exports = function(app, passport) {
    app.get('/home/lessonone', isLoggedIn, (req, res) => lessonController.renderStaff(req, res, "C Scale", "cscale"));

    app.get('/home/lessontwo', isLoggedIn, (req, res) => lessonController.renderStaff(req, res, "G Scale", "gscale"));

    app.get('/home/lessonthree', isLoggedIn, (req, res) => lessonController.renderStaff(req, res, "Jingle Bells", "song"));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }
}