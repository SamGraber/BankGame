import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as htmlRenderer from 'ejs';

import { userRouter } from './routes/userApi';
import { accountRouter } from './routes/accountApi';
import { router } from './routes/serveApp';
import { IHttpError } from './httpError';

const app = express();

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

app.use('/api/users', userRouter);
app.use('/api/account', accountRouter);
// routes needs to be last since we * all empty routes to the index file
app.use('/', router);

/// catch 404 and forwarding to error handler
app.use((req, res, next: Function): void => {
    const error: IHttpError = <IHttpError>new Error('Not Found');
    error.status = 404;
    next(error);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((error: IHttpError, req, response, next): void => {
        response.status(error.status || 500);
		console.log(error.message);
		console.log(error);
        response.render('error.html');
    });
}

// production error handler
// no stacktraces leaked to user
app.use((error: IHttpError, req, response, next): void => {
    response.status(error.status || 500);
	console.log(error.message);
    response.render('error.html');
});

export { app };