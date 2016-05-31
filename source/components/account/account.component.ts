import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, OnActivate, RouteSegment } from '@angular/router';

import { AccountService, IAccount } from '../../services/account/account.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { AccountDetailComponent } from './accountDetail/accountDetail.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';

@Component({
    templateUrl: 'source/components/account/account.component.html',
	directives: [ROUTER_DIRECTIVES],
})
@Routes([
	{ path: '',	    	 component: AccountDetailComponent, },
	{ path: 'detail',   component: AccountDetailComponent, },
	{ path: 'withdraw', component: WithdrawComponent },
	{ path: 'deposit',  component: DepositComponent },
])
export class AccountComponent implements OnActivate {
	account: IAccount;

	constructor(private accountService: AccountService
			, public authentication: AuthenticationService) {}

	routerOnActivate(routeSegment: RouteSegment): void {
		this.accountService.getAccount(routeSegment.getParam('accountId'))
			.subscribe((account: IAccount): IAccount => this.account = account);

		this.accountService.accountChanges
			.subscribe(updatedAccount => this.account = updatedAccount);
	}
}