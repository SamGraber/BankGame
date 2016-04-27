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

	it('should get an item by its identifier', (done: MochaDone): void => {
		const model: ITestModel = {
			identifier: 'prop2',
			properties: [],
			prop2: 2,
		};
		database.currentModel = model;

		databaseService.getDetail(2).then((result: ITestModel): void => {
			expect(result).to.deep.equal(model);
			done();
		});

		database.flush();

		sinon.assert.calledOnce(database.findOne);
		const arg: any = database.update.firstCall.args[1];
		expect(arg.prop2).to.equal(2);
	});

	it('should get a list of items', (done: MochaDone): void => {
		const modelList: ITestModel[] = <any>[
			{ prop1: 'value 1' },
			{ prop1: 'value 2' },
		];
		database.list = modelList;

		databaseService.getList().then((results: ITestModel[]): void => {
			expect(results).to.have.length(2);
			expect(results[0]).to.deep.equal(modelList[0]);
			expect(results[1]).to.deep.equal(modelList[1]);
			done();
		});

		database.flush();

		sinon.assert.calledOnce(database.find);
	});

	it('should update all properties of the model', (done: MochaDone): void => {
		const model: ITestModel = {
			identifier: '1',
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