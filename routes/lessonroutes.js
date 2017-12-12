var lessonController = require('../controllers/lessonController.js');

// Example on how to do the routes

module.exports = function () {
    app.get('/dashboard/lessonexample', lessonController.renderStaff(lessonTitle, lessonJavascript));
}