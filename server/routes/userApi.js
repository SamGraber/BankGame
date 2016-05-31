"use strict";
var _ = require('lodash');
var express = require('express');
var database_1 = require('../database');
var monk_database_helper_1 = require('monk-database-helper');
var user_schema_1 = require('../schemas/user.schema');
var account_schema_1 = require('../schemas/account.schema');
var userRouter = express.Router();
exports.userRouter = userRouter;
var userDatabase = new monk_database_helper_1.DatabaseService(database_1.database.get('users'), user_schema_1.UserSchema);
var accountDatabase = new monk_database_helper_1.DatabaseService(database_1.database.get('accounts'), account_schema_1.AccountSchema);
/*
 * GET users.
 */
userRouter.get('/', function (request, response) {
    userDatabase.getList().then(function (users) {
        response.json(users);
    });
});
userRouter.post('/login', function (request, response) {
    userDatabase.getDetail(request.body.username).then(function (user) {
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
userRouter.post('/register', function (request, response) {
    userDatabase.getList({ username: request.body.username }).then(function (results) {
        if (_.some(results)) {
            response.status(400).send('A user with that username already exists');
            return;
        }
        accountDatabase.create({ balance: 0 }).then(function (account) {
            var newUser = request.body;
            newUser.accountId = account._id;
            userDatabase.create(request.body).then(function (user) {
                response.json(user);
            });
        });
    });
});
//# sourceMappingURL=userApi.js.map