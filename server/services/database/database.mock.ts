import * as _ from 'lodash';

interface IMockAsync extends Sinon.SinonSpy {
	callback(): void;
}

export class MockDatabase {
	findOne: IMockAsync;
	find: IMockAsync;
	update: IMockAsync;

	currentModel: any;
	list: any[];

	constructor() {
		this.findOne = sinon.spy(this.findOneFunc);
		this.find = sinon.spy(this.findFunc);
		this.update = sinon.spy(this.updateFunc);
	}

	flush(): void {
		_.each(this, (prop: IMockAsync): void => {
			if (prop.callback) {
				prop.callback();
				prop.callback = null;
			}
		});
	}

	private findOneFunc(query: any, param: any, callback: { (error: any, results: any): void }): void {
		this.findOne.callback = () => callback(null, this.currentModel);
	}

	private findFunc(query: any, param: any, callback: { (error: any, results: any[]): void }): void {
		this.find.callback = () => callback(null, this.list);
	}

	private updateFunc(query: any, update: any, callback: { (): void }): void {
		this.update.callback = callback;
	}
}