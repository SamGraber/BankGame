import * as toastr from 'toastr';
import { Injectable } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {
	constructor(private http: Http) {}
	
	get(url: string): Observable<any> {
		return this.http.get(url)
					.map(this.extractData)
					.catch(this.handleError);
	}
	
	post(url: string, body: any): Observable<any> {
		const jsonBody = JSON.stringify(body);
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });
		return this.http.post(url, jsonBody, options)
					.map(res =>  {
						return res.json();
					})
					.catch(this.handleError);
	}
	
	put(url: string, body: any): Observable<any> {
		const jsonBody = JSON.stringify(body);
		const headers = new Headers({ 'Content-Type': 'application/json' });
		const options = new RequestOptions({ headers: headers });
		return this.http.put(url, jsonBody, options)
					.map(res =>  {
						return res.json();
					})
					.catch(this.handleError);
	}
	
	private extractData(res: Response) {
		if (res.status < 200 || res.status >= 300) {
		throw new Error('Bad response status: ' + res.status);
		}
		let body = res.json();
		return body || { };
	}
	
	private handleError (error: any) {
		// In a real world app, we might send the error to remote logging infrastructure
		let errMsg = error._body || 'Server error';
		console.error(errMsg); // log to console instead
		
		if (error.status >= 500) {
			toastr.error('An error has occured. Please contact support for further assistance');
		} else {
			toastr.warning(errMsg);
		}
		return Observable.throw(errMsg);
	}
}