var lessonExports = module.exports = {}
var path = require("path");

// Uses Handlebars dynamic partials to change to each lesson

lessonExports.lessonOne = function(req, res) {
    res.sendFile(path.join(__dirname, '../public', '/html/cscale.html'));
};

lessonExports.lessonTwo = function(req, res) {
    res.sendFile(path.join(__dirname, '../public', '/html/gscale.html'));
};

lessonExports.lessonThree = function(req, res) {
    res.sendFile(path.join(__dirname, '../public', '/html/jinglebells.html'));
};