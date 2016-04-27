"use strict";
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var htmlRenderer = require('ejs');
var userApi_1 = require('./routes/userApi');
var accountApi_1 = require('./routes/accountApi');
var serveApp_1 = require('./routes/serveApp');
var app = express();
exports.app = app;
// view engine setup
app.set('views', __dirname + '/views');
app.engine('html', htmlRenderer.renderFile);
app.set('view engine', 'html');
app.use(favicon(__dirname.replace('server', '') + '/assets/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/node_modules', express.static('node_modules'));
app.use('/config.js', express.static('config.js'));
app.use('/assets', express.static('assets'));
app.use('/source', express.static('source'));
app.use('/api/users', userApi_1.userRouter);
app.use('/api/account', accountApi_1.accountRouter);
// routes needs to be last since we * all empty routes to the index file
app.use('/', serveApp_1.router);
/// catch 404 and forwarding to error handler
app.use(function (request, response, next) {
    var error = new Error('Not Found');
    error.status = 404;
    next(error);
});
/// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (error, request, response) {
        response.status(error.status || 500);
        console.log(error.message);
        console.log(error);
        response.render('error.html');
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (error, request, response) {
    response.status(error.status || 500);
    console.log(error.message);
    response.render('error.html');
});
//# sourceMappingURL=server.js.map