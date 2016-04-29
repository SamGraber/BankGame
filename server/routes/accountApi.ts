import * as express from 'express';
import { database } from '../database';
import { DatabaseService } from '../services/database/database.service';
import { UserSchema, IUser } from '../schemas/user.schema';
import { AccountSchema, IAccount } from '../schemas/account.schema';

const accountRouter = express.Router();
const accountDatabase = new DatabaseService(database.get('accounts'), AccountSchema);
const userDatabase = new DatabaseService(database.get('users'), UserSchema);

/*
 * GET accounts.
 */
accountRouter.get('/', (request: express.Request, response: express.Response): void => {
    accountDatabase.getList().then((accounts: IAccount[]): void => {
        response.json(accounts);
    });
});

accountRouter.get('/:id', (request: express.Request, response: express.Response): void => {
    accountDatabase.getDetail(request.params.id).then((account: IAccount): void => {
        if (account) {
			response.json(account);
			return;
		}
		response.status(500).send('The specified account was not found');
    });
});

accountRouter.put('/:id', (request: express.Request, response: express.Response): void => {
	accountDatabase.update(request.body).then((updatedAccount: IAccount): void => {
		response.json(updatedAccount);
	});
})

accountRouter.post('/new', (request: express.Request, response: express.Response): void => {
	userDatabase.getDetail(request.body.username).then((user: IUser): void => {
		if (user) {
			accountDatabase.create({ 'balance': 0 }).then((account: IAccount): void => {
				user.accountId = account._id;
				userDatabase.update(user).then((): void => {
					response.json(account);
				});
			});
		}
	});
});

export { accountRouter };