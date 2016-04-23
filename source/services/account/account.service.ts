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
	
	getAccount(accountId: string): Observable<IAccount> {
		return this.http.get('/api/account/' + accountId);
	}
	
	getAccountForUser(user: IUser): Observable<IAccount> {
		if (user.accountId == null) {
			return this.http.post('/api/account/new', user);			
		}
		return this.getAccount(user.accountId);
	}
	
	updateAccount(account: IAccount): Observable<IAccount> {
		return this.http.put('api/account/' + account._id, account);
	}
}
