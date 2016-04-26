import { DatabaseService, IModel } from './database.service';

interface ITestModel extends IModel {
	prop1?: string;
	prop2?: number;
}

interface IMockDatabase {
	resolve(): void;
	callback: Function;
	update: Sinon.SinonSpy;
	findOne: Sinon.SinonSpy;
}

describe('database service', (): void => {
	let database: IMockDatabase;
	let databaseService: DatabaseService;

	beforeEach((): void => {
		database = {
			resolve(): void { database.callback(); },
			callback: null,
			update: sinon.spy((query: any, model: any, callback: Function): void => { database.callback = callback; }),
			findOne: sinon.spy(),
		};
		databaseService = new DatabaseService(database);
	});

	it('should update all properties of the model', (done: MochaDone): void => {
		const model: ITestModel = {
			properties: ['prop1', 'prop2'],
			prop1: 'something',
			prop2: 4,
		};

		databaseService.update(model).then((result: ITestModel): void => {
			// expect(result).to.deep.equal(model);
			// done();
		});

		database.resolve();

		sinon.assert.calledOnce(database.update);
		const arg: any = database.update.firstCall.args[1];
		expect(arg.$set.prop1).to.equal('something');
		expect(arg.$set.prop2).to.equal(4);
		done();
	});
});