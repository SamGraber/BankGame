import * as express from 'express';
import { database } from '../database';

const accountRouter = express.Router();
const accountCollection = database.get('accounts');
const usersCollection = database.get('users');

/*
 * GET accounts.
 */
accountRouter.get('/', (request, response): void => {
    accountCollection.find({} ,{}, (error, accounts): void => {
        response.json(accounts);
    });
});

accountRouter.get('/:id', (request, response): void => {
    accountCollection.findOne({ '_id': request.params.id }, {}, (error, account): void => {
        if (account) {
			response.json(account);
			return;
		}
		response.status(500).send('The specified account was not found');
    });
});

accountRouter.put('/:id', (request, response): void => {
	accountCollection.update({ '_id': request.params.id }
	, { '$set': {'balance': request.body.balance}}
	, (error, account): void => {
		accountCollection.findOne({ '_id': request.params.id }, {}, (error, updatedAccount): void => {
			response.json(updatedAccount);
		});
	});
})

accountRouter.post('/new', (request, response): void => {
	usersCollection.findOne({ 'username': request.body.username }, {}, (error, user): void => {
		if (user) {
			accountCollection.insert({ 'balance': 0 }, (error, account): void => {
				usersCollection.update({ 'username': request.body.username }, { '$set': { 'accountId': account._id }}, (error): void => {
					response.json(account);
				});
			});
		}
	});
});

export { accountRouter };