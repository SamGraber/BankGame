// Database
const mongo = require('mongodb');
const monk = require('monk');
const database = monk('localhost:27017/bankgame');

module.exports = database