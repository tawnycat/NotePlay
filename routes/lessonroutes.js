var lessonController = require('../controllers/lessonController.js');

module.exports = function(app, passport) {
    app.get('/home/lessonone', isLoggedIn, lessonController.lessonOne);

    app.get('/home/lessontwo', isLoggedIn, lessonController.lessonTwo);

    app.get('/home/lessonthree', isLoggedIn, lessonController.lessonThree);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    }
}