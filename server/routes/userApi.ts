import * as _ from 'lodash';
import * as express from 'express';
import { database } from '../database';

const userRouter = express.Router();
const userCollection = database.get('users');

/*
 * GET users.
 */
userRouter.get('/', (request: express.Request, response: express.Response): void =>  {
	userCollection.find({}, {}, (error, users): void => {
		response.json(users);
	});
});

userRouter.post('/login', (request: express.Request, response: express.Response): void => {
	userCollection.findOne({ 'username': request.body.username }, {}, (error, user): void => {
		if (user) {
			if (user.password === request.body.password) {
				response.json(user);
				return;
			}
			response.status(400).send('Incorrect password');
			return;
		}
		response.status(400).send('No user with that username exists');
	});
});

userRouter.post('/register', (request: express.Request, response: express.Response): void => {
	userCollection.find({ 'username': request.body.username }, {}, (error, results): void => {
		if (_.some(results)) {
			response.status(400).send('A user with that username already exists');
			return;
		}
		userCollection.insert(request.body, (error, user): void => {
			response.json(user);
		});
	});
});

export { userRouter };