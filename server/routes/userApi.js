"use strict";
var _ = require('lodash');
var express = require('express');
var database_1 = require('../database');
var userRouter = express.Router();
exports.userRouter = userRouter;
var userCollection = database_1.database.get('users');
/*
 * GET users.
 */
userRouter.get('/', function (request, response) {
    userCollection.find({}, {}, function (error, users) {
        response.json(users);
    });
});
userRouter.post('/login', function (request, response) {
    userCollection.findOne({ 'username': request.body.username }, {}, function (error, user) {
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
    userCollection.find({ 'username': request.body.username }, {}, function (error, results) {
        if (_.some(results)) {
            response.status(400).send('A user with that username already exists');
            return;
        }
        userCollection.insert(request.body, function (error, user) {
            response.json(user);
        });
    });
});
//# sourceMappingURL=userApi.js.map