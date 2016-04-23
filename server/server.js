var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var htmlRenderer = require('ejs');
// Database
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/bankgame');

var users = require('./routes/users');
// routes needs to be last since we * all empty routes to the index file
var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.engine('html', htmlRenderer.renderFile);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/node_modules', express.static('node_modules'));
app.use('/config.js', express.static('config.js'));
app.use('/assets', express.static('assets'));
app.use('/source', express.static('source'));

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/users', users);
app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
		console.log(err.message);
		console.log(err);
        res.render('error.html');
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
	console.log(err.message);
    res.render('error.html');
});


module.exports = app;