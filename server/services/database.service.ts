import * as _ from 'lodash';
import { Promise } from 'es6-shim';

export interface IModel {
	properties: string[];
}

export class DatabaseService {
	constructor(public database: any) { }

	update(model: IModel): Promise<IModel> {
		return new Promise((resolve: Function, reject: Function): void => {
			this.database.update({ '_id': '1' }, this.buildUpdateModel(model), (updateError): void => {
				this.database.findOne({ '_id': '1' }, (findError, updatedModel): void => {
					resolve(updatedModel);
				});
			});
		});
	}

	private buildUpdateModel(model: IModel): any {
		const updateModel: any = { $set: {} };
		_.each(model.properties, (prop: string): any => {
			updateModel.$set[prop] = model[prop];
		});
		return updateModel;
	}
}