interface IHttpError extends Error {
    status: number;
}

const __express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const htmlRenderer = require('ejs');

const users = require('./routes/userApi');
const accounts = require('./routes/accountApi');
// routes needs to be last since we * all empty routes to the index file
const routes = require('./routes/serveApp');

const application = __express();

// view engine setup
application.set('views', __dirname + '/views');
application.engine('html', htmlRenderer.renderFile);
application.set('view engine', 'html');

application.use(favicon(__dirname.replace('server', '') + '/assets/favicon.ico'));
application.use(logger('dev'));
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({ extended: false }));
application.use(cookieParser());
application.use('/node_modules', __express.static('node_modules'));
application.use('/config.js', __express.static('config.js'));
application.use('/assets', __express.static('assets'));
application.use('/source', __express.static('source'));

application.use('/api/users', users);
application.use('/api/account', accounts);
application.use('/', routes);

/// catch 404 and forwarding to error handler
application.use((req, res, next: Function): void => {
    const error: IHttpError = <IHttpError>new Error('Not Found');
    error.status = 404;
    next(error);
});

/// error handlers

// development error handler
// will print stacktrace
if (application.get('env') === 'development') {
    application.use((error: IHttpError, req, response, next): void => {
        response.status(error.status || 500);
		console.log(error.message);
		console.log(error);
        response.render('error.html');
    });
}

// production error handler
// no stacktraces leaked to user
application.use((error: IHttpError, req, response, next): void => {
    response.status(error.status || 500);
	console.log(error.message);
    response.render('error.html');
});

module.exports = application;