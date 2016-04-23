import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/observable';

@Injectable()
export class RequestService {
	constructor(private http: Http) {}
	
	post(url: string, body: any): Observable<any> {
		const jsonBody = JSON.stringify(body);
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });
		return this.http.post(url, jsonBody, options)
					.map(res =>  {
						return res.json().data;
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