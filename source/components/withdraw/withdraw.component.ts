import * as _ from 'lodash';
import { Component } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { AccountService, IAccount } from '../../services/account/account.service';

@Component({
	templateUrl: 'source/components/withdraw/withdraw.component.html',
})
export class WithdrawComponent {
	account: IAccount;
	amount: number;
	
	constructor(private accountService: AccountService
			, private routeParams: RouteParams
			, private router: Router) {}
	
	ngOnInit(): void {
		this.accountService.getAccount(this.routeParams.get('accountId'))
			.subscribe((account: IAccount): IAccount => this.account = account);
	}
	
	withdraw(): void {
		const updatedAccount: IAccount = _.clone(this.account);
		updatedAccount.balance -= this.amount;
		this.accountService.updateAccount(updatedAccount).subscribe((): void => {
			this.router.navigate(['Account']);
		});
	}
}