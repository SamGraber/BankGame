import { ISchema } from 'monk-database-helper';

export interface IAccount {
	_id: string;
	balance: number;
}

export const AccountSchema: ISchema = {
	identifier: '_id',
	properties: ['balance'],
};