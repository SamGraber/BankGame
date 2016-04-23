import { Component } from 'angular2/core';
import { RouteParams } from 'angular2/router';
import { AccountService, IAccount } from '../../services/account/account.service';

@Component({
	templateUrl: 'source/components/withdraw/withdraw.component.html',
})
export class WithdrawComponent {
	account: IAccount;
	
	constructor(private accountService: AccountService
			, private routeParams: RouteParams) {}
	
	ngOnInit(): void {
		this.accountService.getAccount(this.routeParams.get('accountId'))
			.subscribe((account: IAccount): IAccount => this.account = account);
	}
}