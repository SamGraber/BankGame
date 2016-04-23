import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/observable';
import { RequestService } from '../request/request.service';

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
	
	login(credentials: ICredentials): Observable<IUser> {
		return this.http.post('/users/login', credentials)
					.map(user =>  {
						this.loggedInUser = user;
						console.log(user.username + ' is now logged in');
						this.isAuthenticated = true;
						return this.loggedInUser;
					});
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