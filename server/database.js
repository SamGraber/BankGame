"use strict";
var monk = require('monk');
var database = monk('localhost:27017/bankgame');
exports.database = database;
//# sourceMappingURL=database.js.map