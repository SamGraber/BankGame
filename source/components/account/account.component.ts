import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

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
	{ path: 'detail',			    component: AccountDetailComponent, },
	{ path: 'withdraw/:accountId', component: WithdrawComponent },
	{ path: 'deposit/:accountId',  component: DepositComponent },
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