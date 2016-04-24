"use strict";
var express = require('express');
var database_1 = require('../database');
var accountRouter = express.Router();
exports.accountRouter = accountRouter;
var accountCollection = database_1.database.get('accounts');
var usersCollection = database_1.database.get('users');
/*
 * GET accounts.
 */
accountRouter.get('/', function (request, response) {
    accountCollection.find({}, {}, function (error, accounts) {
        response.json(accounts);
    });
});
accountRouter.get('/:id', function (request, response) {
    accountCollection.findOne({ '_id': request.params.id }, {}, function (error, account) {
        if (account) {
            response.json(account);
            return;
        }
        response.status(500).send('The specified account was not found');
    });
});
accountRouter.put('/:id', function (request, response) {
    accountCollection.update({ '_id': request.params.id }, { '$set': { 'balance': request.body.balance } }, function (error, account) {
        response.json(account);
    });
});
accountRouter.post('/new', function (request, response) {
    usersCollection.findOne({ 'username': request.body.username }, {}, function (error, user) {
        if (user) {
            accountCollection.insert({ 'balance': 0 }, function (error, account) {
                usersCollection.update({ 'username': request.body.username }, { '$set': { 'accountId': account._id } }, function (error) {
                    response.json(account);
                });
            });
        }
    });
});
//# sourceMappingURL=accountApi.js.map