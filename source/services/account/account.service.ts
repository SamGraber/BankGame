import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { RequestService } from '../request/request.service';
import { IUser } from '../authentication/authentication.service';

export interface IAccount {
	_id: string;
	user: IUser;
	balance: number;
}

@Injectable()
export class AccountService {
	accountChanges: Subject<IAccount>;

	constructor(private http: RequestService) {
		this.accountChanges = new Subject<IAccount>();
	}

	getAccount(accountId: string): Observable<IAccount> {
		return this.http.get('/api/account/' + accountId);
	}

	getAccountForUser(user: IUser): Observable<IAccount> {
		return this.getAccount(user.accountId);
	}

	updateAccount(account: IAccount): Observable<IAccount> {
		return this.http.put('api/account/' + account._id, account)
			.map(updatedAccount => {
				this.accountChanges.next(updatedAccount);
				return updatedAccount;
			});
	}
}
