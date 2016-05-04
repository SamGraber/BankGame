import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { AccountService, IAccount } from '../../services/account/account.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AccountDetailComponent } from './accountDetail/accountDetail.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';

@Component({
    templateUrl: 'source/components/account/account.component.html',
	directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
	{ path: '/', 				    name: 'Detail', component: AccountDetailComponent, useAsDefault: true },
	{ path: '/withdraw/:accountId', name: 'Withdraw', component: WithdrawComponent },
	{ path: '/deposit/:accountId',  name: 'Deposit',  component: DepositComponent },
])
export class AccountComponent implements OnInit {
	account: IAccount;

	constructor(private accountService: AccountService
			, public authentication: AuthenticationService) {}

	ngOnInit(): void {
		this.accountService.getAccountForUser(this.authentication.activeUser)
			.subscribe((account: IAccount): IAccount => this.account = account);

		this.accountService.accountChanges
			.subscribe(updatedAccount => this.account = updatedAccount);
	}
}