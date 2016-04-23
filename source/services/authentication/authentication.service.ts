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
		let body = JSON.stringify(credentials);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post('/users/login', body, options)
					.map(res =>  {
						this.loggedInUser = res.json().data;
						console.log(credentials.username + ' is now logged in');
						this.isAuthenticated = true;
						return this.loggedInUser;
					})
					.catch(this.handleError);
	}
	
	private handleError (error: any) {
		// In a real world app, we might send the error to remote logging infrastructure
		let errMsg = error._body || 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}