import * as _ from 'lodash';
import { Promise } from 'es6-shim';

export interface ISchema {
	identifier: string;
	properties: string[];
}

export class DatabaseService<TDataType> {
	constructor(public database: any
			, public schema: ISchema) { }

	getList(): Promise<TDataType[]> {
		return new Promise((resolve: Function, reject: Function): void => {
			this.database.find({}, {}, (error: any, data: TDataType[]): void => {
				resolve(data);
			});
		});
	}

	getDetail(id: any): Promise<IModel> {
		return null;
	}

	update(model: TDataType): Promise<TDataType> {
		return new Promise((resolve: Function, reject: Function): void => {
			const id: any = model[this.schema.identifier];
			const query: any = this.buildQuery(this.schema, id);
			this.database.update(query, this.buildUpdateModel(this.schema, model), (updateError): void => {
				this.database.findOne(query, {}, (findError, updatedModel): void => {
					resolve(updatedModel);
				});
			});
		});
	}

	private buildQuery(schema: ISchema, id: any): any {
		const query: any = {};
		query[schema.identifier] = id;
		return query;
	}

	private buildUpdateModel(schema: ISchema, model: any): any {
		const updateModel: any = { $set: {} };
		_.each(schema.properties, (prop: string): any => {
			updateModel.$set[prop] = model[prop];
		});
		return updateModel;
	}
}