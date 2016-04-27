import { ISchema } from '../services/database/database.service';

export interface IAccount {
	_id: string;
	balance: number;
}

export const AccountSchema: ISchema = {
	identifier: '_id',
	properties: ['balance'],
};