var flash = require('connect-flash');
var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'anything', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//Models
var models = require("./models");

//load Passport strategies
require('./config/passport/passport.js')(passport, models.user);
 
//Routes
var loginRoute = require('./routes/loginroutes.js')(app,passport);
var lessonRoute = require('./routes/lessonroutes.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

// Serves public files
app.use(express.static('public'));

//Sync Database
models.sequelize.sync().then(function() {
 
    console.log('Nice! Database looks fine')
 
}).catch(function(err) {
 
    console.log(err, "Something went wrong with the Database Update!")
 
});

//For Handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Listener
app.listen(3000, function(err) {

    if (!err)
        console.log("Site is live");
    else console.log(err)

});