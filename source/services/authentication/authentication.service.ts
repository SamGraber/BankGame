import {Injectable} from 'angular2/core';

export interface IUser {
	username: string;
}

export interface ICredentials {
	username: string;
	password: string;
}

@Injectable()
export class AuthenticationService {
	isAuthenticated: boolean = false;
	loggedInUser: IUser;
	
	login(credentials: ICredentials) {
		console.log(credentials.username + ' is now logged in');
		this.isAuthenticated = true;
	}
}