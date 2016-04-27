import { DatabaseService, IModel } from './database.service';
import { MockDatabase } from './database.mock';

interface ITestModel extends IModel {
	prop1?: string;
	prop2?: number;
}

describe('database service', (): void => {
	let database: MockDatabase;
	let databaseService: DatabaseService;

	beforeEach((): void => {
		database = new MockDatabase();
		databaseService = new DatabaseService(database);
	});

	it('should update all properties of the model', (done: MochaDone): void => {
		const model: ITestModel = {
			properties: ['prop1', 'prop2'],
			prop1: 'something',
			prop2: 4,
		};
		database.currentModel = model;

		databaseService.update(model).then((result: ITestModel): void => {
			expect(result).to.deep.equal(model);
			done();
		});

		database.flush();
		database.flush();

		sinon.assert.calledOnce(database.update);
		const arg: any = database.update.firstCall.args[1];
		expect(arg.$set.prop1).to.equal('something');
		expect(arg.$set.prop2).to.equal(4);
	});
});