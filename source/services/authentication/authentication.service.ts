import * as _ from 'lodash';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { RequestService } from '../request/request.service';
import { Store } from '../store/store.service';
import { ArrayUtility } from '../array/array.service';

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
			, private store: Store
			, private array: ArrayUtility) { }

	restoreSession(): boolean {
		if (this.store.get('loggedInUsers')) {
			this.loggedInUsers = this.store.get<IUser[]>('loggedInUsers');
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
		this.store.set(this.loggedInUsers, 'loggedInUsers');

		if (!_.some(this.loggedInUsers)) {
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
		this.store.set(this.loggedInUsers, 'loggedInUsers');
		return this.activeUser;
	}
}