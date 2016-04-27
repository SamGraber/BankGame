import { ISchema } from '../services/database/database.service';

export interface IUser {
	username: string;
	password: string;
	accountId: string;
}

export const UserSchema: ISchema = {
	identifier: 'username',
	properties: ['username', 'password', 'accountId'],
};