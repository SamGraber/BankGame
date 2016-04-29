import * as _ from 'lodash';
import * as express from 'express';
import { database } from '../database';
import { DatabaseService } from '../services/database/database.service';
import { UserSchema, IUser } from '../schemas/user.schema';
import { AccountSchema, IAccount } from '../schemas/account.schema';

const userRouter = express.Router();
const userDatabase = new DatabaseService(database.get('users'), UserSchema);
const accountDatabase = new DatabaseService(database.get('accounts'), AccountSchema);

export interface IUserSearch {
	username?: string;
}

/*
 * GET users.
 */
userRouter.get('/', (request: express.Request, response: express.Response): void =>  {
	userDatabase.getList().then((users: IUser[]): void => {
		response.json(users);
	});
});

userRouter.post('/login', (request: express.Request, response: express.Response): void => {
	userDatabase.getDetail(request.body.username).then((user: IUser): void => {
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
	userDatabase.getList<IUserSearch>({ username: request.body.username }).then((results: IUser[]): void => {
		if (_.some(results)) {
			response.status(400).send('A user with that username already exists');
			return;
		}

		accountDatabase.create({ balance: 0 }).then((account: IAccount): void => {
			const newUser: IUser = request.body;
			newUser.accountId = account._id;
			userDatabase.create(request.body).then((user: IUser): void => {
				response.json(user);
			});
		});
	});
});

export { userRouter };