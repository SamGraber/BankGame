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
		let stream: Observable<IAccount>;
		if (user.accountId == null) {
			stream = this.http.post('/api/account/new', user);			
		}
		stream = this.http.get('/api/account/' + user.accountId);
		return stream.map((account: IAccount) => { 
			account.user = user;
			return account;
		});
	}
}
