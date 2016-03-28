import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/observable';

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
	
	constructor(private http: Http) {}
	
	login(credentials: ICredentials): Observable<IUser> {
		console.log(credentials.username + ' is now logged in');
		this.isAuthenticated = true;
		
		let body = JSON.stringify({ name });
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post('/users/login', body, options)
					.map(res =>  {
						this.loggedInUser = res.json().data;
						return this.loggedInUser;
					})
					.catch(err => console.error(err));
	}
}