"use strict";
var _ = require('lodash');
var MockDatabase = (function () {
    function MockDatabase() {
        this.findOne = sinon.spy(this.findOneFunc);
        this.find = sinon.spy(this.findFunc);
        this.update = sinon.spy(this.updateFunc);
    }
    MockDatabase.prototype.flush = function () {
        _.each(this, function (prop) {
            if (prop.callback) {
                prop.callback();
                prop.callback = null;
            }
        });
    };
    MockDatabase.prototype.findOneFunc = function (query, param, callback) {
        var _this = this;
        this.findOne.callback = function () { return callback(null, _this.currentModel); };
    };
    MockDatabase.prototype.findFunc = function (query, param, callback) {
        var _this = this;
        this.find.callback = function () { return callback(null, _this.list); };
    };
    MockDatabase.prototype.updateFunc = function (query, update, callback) {
        this.update.callback = callback;
    };
    return MockDatabase;
}());
exports.MockDatabase = MockDatabase;
//# sourceMappingURL=database.mock.js.map