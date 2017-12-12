var lessonExports = module.exports = {}

// Example for lesson dynamic partial

lessonExports.renderStaff = function(req, res, lessonTitle, lessonJavascript) {
    res.render('lesson', {
        title: lessonTitle,
        whichJavascript: function() {
            return lessonJavascript;
        }
    });
};