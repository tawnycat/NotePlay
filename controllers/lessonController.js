var lessonExports = module.exports = {}

// Uses Handlebars dynamic partials to change to each lesson

lessonExports.renderStaff = function(req, res, lessonTitle, lessonJavascript) {
    console.log(
    	"req:" + req + "\n" +
    	"lessonTitle:" + lessonTitle + "\n" +
    	"lessonJavascript:" + lessonJavascript
    	);

    res.render('lesson', {
        title: lessonTitle,
        whichJavascript: function() {
            return lessonJavascript;
        }
    });
};