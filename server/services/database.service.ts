import * as _ from 'lodash';
import { Promise } from 'es6-shim';

export interface IModel {
	properties: string[];
}

export class DatabaseService {
	constructor(public database: any) { }

	update(model: IModel): Promise<IModel> {
		return null;
	}
}