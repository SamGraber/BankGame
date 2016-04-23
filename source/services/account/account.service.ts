import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/observable';
import { RequestService } from '../request/request.service';
import { IUser } from '../authentication/authentication.service';

export interface IAccount {
	_id: number;
	user: IUser;
	balance: number;
}

@Injectable()
export class AccountService {
	constructor(private http: RequestService) {}
	
	getAccount(user: IUser): Observable<IAccount> {
		if (user.accountId == null) {
			return this.http.post('/account/new', user);			
		}
		return this.http.get('/account/' + user.accountId);
	}	
}
