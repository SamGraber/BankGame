"use strict";
var _ = require('lodash');
var es6_shim_1 = require('es6-shim');
var DatabaseService = (function () {
    function DatabaseService(database, schema) {
        this.database = database;
        this.schema = schema;
    }
    DatabaseService.prototype.getList = function () {
        var _this = this;
        return new es6_shim_1.Promise(function (resolve, reject) {
            _this.database.find({}, {}, function (error, data) {
                resolve(data);
            });
        });
    };
    DatabaseService.prototype.getDetail = function (id) {
        var _this = this;
        return new es6_shim_1.Promise(function (resolve, reject) {
            var query = _this.buildQuery(_this.schema, id);
            _this.database.findOne(query, {}, function (error, data) {
                resolve(data);
            });
        });
    };
    DatabaseService.prototype.update = function (model) {
        var _this = this;
        return new es6_shim_1.Promise(function (resolve, reject) {
            var id = model[_this.schema.identifier];
            var query = _this.buildQuery(_this.schema, id);
            _this.database.update(query, _this.buildUpdateModel(_this.schema, model), function (updateError) {
                _this.database.findOne(query, {}, function (findError, updatedModel) {
                    resolve(updatedModel);
                });
            });
        });
    };
    DatabaseService.prototype.buildQuery = function (schema, id) {
        var query = {};
        query[schema.identifier] = id;
        return query;
    };
    DatabaseService.prototype.buildUpdateModel = function (schema, model) {
        var updateModel = { $set: {} };
        _.each(schema.properties, function (prop) {
            updateModel.$set[prop] = model[prop];
        });
        return updateModel;
    };
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=database.service.js.map