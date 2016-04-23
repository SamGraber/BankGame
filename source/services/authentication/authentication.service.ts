import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/observable';
import { RequestService } from '../request/request.service';

declare var localStorage: ISessionStorage;

interface ISessionStorage {
	loggedInUser: string;
}

export interface IUser {
	username: string;
	accountId: number;
}

export interface ICredentials {
	username: string;
	password: string;
}

@Injectable()
export class AuthenticationService {
	isAuthenticated: boolean = false;
	loggedInUser: IUser;
	
	constructor(private http: RequestService) {}
	
	restoreSession(): boolean {
		if (localStorage.loggedInUser) {
			this.loggedInUser = JSON.parse(localStorage.loggedInUser);
			this.isAuthenticated = true;
			return true;
		}
		return false;
	}
	
	login(credentials: ICredentials): Observable<IUser> {
		return this.http.post('/users/login', credentials)
					.map(user =>  {
						this.loggedInUser = user;
						console.log(user.username + ' is now logged in');
						localStorage.loggedInUser = JSON.stringify(user);
						this.isAuthenticated = true;
						return this.loggedInUser;
					});
	}
	
	logout(): void {
		localStorage.loggedInUser = null;
	}
	
	register(credentials: ICredentials): Observable<IUser> {
		return this.http.post('/users/register', credentials)
					.map(user =>  {
						this.loggedInUser = user;
						this.isAuthenticated = true;
						return this.loggedInUser;
					});
	}
}