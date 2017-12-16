var lessonController = require('../controllers/lessonController.js');

module.exports = function (app) {
    app.get('/home/lessonone', (req, res) => lessonController.renderStaff(req, res,"C Scale", "cscale"));

    app.get('/home/lessontwo', (req, res) => lessonController.renderStaff(req, res, "G Scale", "gscale"));

    app.get('/home/lessonthree', (req, res) => lessonController.renderStaff("Jingle Bells", "song"));
}