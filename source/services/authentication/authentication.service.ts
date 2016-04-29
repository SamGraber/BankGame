import * as _ from 'lodash';
import { Injectable, Inject } from 'angular2/core';
import { Observable } from 'rxjs/Observable';

import { arrayToken, IArrayUtility } from 'typescript-angular-utilities/source/services/array/array.service';

import { RequestService } from '../request/request.service';

declare var localStorage: ISessionStorage;

interface ISessionStorage {
	loggedInUsers: string;
	removeItem(item: string): void;
}

export interface IUser {
	username: string;
	accountId: string;
}

export interface ICredentials {
	username: string;
	password: string;
}

@Injectable()
export class AuthenticationService {
	isAuthenticated: boolean = false;
	activeUser: IUser;
	loggedInUsers: IUser[] = [];

	constructor(private http: RequestService
			, @Inject(arrayToken) private array: IArrayUtility) { }

	restoreSession(): boolean {
		if (localStorage.loggedInUsers) {
			this.loggedInUsers = JSON.parse(localStorage.loggedInUsers);
			if (this.loggedInUsers.length === 1) {
				this.activeUser = this.loggedInUsers[0];
			}

			this.isAuthenticated = true;
			return true;
		}
		return false;
	}

	login(credentials: ICredentials): Observable<IUser> {
		return this.http.post('/api/users/login', credentials)
					.map(this.authenticate);
	}

	logout(): void {
		this.array.remove(this.loggedInUsers, this.activeUser);
		this.activeUser = null;

		if (_.some(this.loggedInUsers)) {
			localStorage.loggedInUsers = JSON.stringify(this.loggedInUsers);
		} else {
			localStorage.removeItem('loggedInUser');
			this.isAuthenticated = false;
		}
	}

	register(credentials: ICredentials): Observable<IUser> {
		return this.http.post('/api/users/register', credentials)
					.map(this.authenticate);
	}

	private authenticate: { (user: IUser): IUser } = (user: IUser): IUser => {
		this.activeUser = user;
		this.loggedInUsers.push(user);
		this.isAuthenticated = true;
		localStorage.loggedInUsers = JSON.stringify(this.loggedInUsers);
		return this.activeUser;
	}
}