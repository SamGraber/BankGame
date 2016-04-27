"use strict";
var database_service_1 = require('./database.service');
var database_mock_1 = require('./database.mock');
describe('database service', function () {
    var model;
    var database;
    var databaseService;
    beforeEach(function () {
        model = {
            identifier: 'prop2',
            properties: ['prop1', 'prop2'],
        };
        database = new database_mock_1.MockDatabase();
        databaseService = new database_service_1.DatabaseService(database, model);
    });
    it('should get an item by its identifier', function (done) {
        var model = {
            prop2: 2,
        };
        database.currentModel = model;
        databaseService.getDetail(2).then(function (result) {
            expect(result).to.deep.equal(model);
            done();
        });
        database.flush();
        sinon.assert.calledOnce(database.findOne);
        sinon.assert.calledWith(database.findOne, { prop2: 2 });
    });
    it('should get a list of items', function (done) {
        var modelList = [
            { prop1: 'value 1' },
            { prop1: 'value 2' },
        ];
        database.list = modelList;
        databaseService.getList().then(function (results) {
            expect(results).to.have.length(2);
            expect(results[0]).to.deep.equal(modelList[0]);
            expect(results[1]).to.deep.equal(modelList[1]);
            done();
        });
        database.flush();
        sinon.assert.calledOnce(database.find);
    });
    it('should update all properties of the model', function (done) {
        var model = {
            prop1: 'something',
            prop2: 4,
        };
        database.currentModel = model;
        databaseService.update(model).then(function (result) {
            expect(result).to.deep.equal(model);
            done();
        });
        database.flush();
        database.flush();
        sinon.assert.calledOnce(database.update);
        var arg = database.update.firstCall.args[1];
        expect(arg.$set.prop1).to.equal('something');
        expect(arg.$set.prop2).to.equal(4);
    });
});
//# sourceMappingURL=database.service.tests.js.map