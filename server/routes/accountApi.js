"use strict";
var express = require('express');
var database_1 = require('../database');
var monk_database_helper_1 = require('monk-database-helper');
var user_schema_1 = require('../schemas/user.schema');
var account_schema_1 = require('../schemas/account.schema');
var accountRouter = express.Router();
exports.accountRouter = accountRouter;
var accountDatabase = new monk_database_helper_1.DatabaseService(database_1.database.get('accounts'), account_schema_1.AccountSchema);
var userDatabase = new monk_database_helper_1.DatabaseService(database_1.database.get('users'), user_schema_1.UserSchema);
/*
 * GET accounts.
 */
accountRouter.get('/', function (request, response) {
    accountDatabase.getList().then(function (accounts) {
        response.json(accounts);
    });
});
accountRouter.get('/:id', function (request, response) {
    accountDatabase.getDetail(request.params.id).then(function (account) {
        if (account) {
            response.json(account);
            return;
        }
        response.status(500).send('The specified account was not found');
    });
});
accountRouter.put('/:id', function (request, response) {
    accountDatabase.update(request.body).then(function (updatedAccount) {
        response.json(updatedAccount);
    });
});
//# sourceMappingURL=accountApi.js.map