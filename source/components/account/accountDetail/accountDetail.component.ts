import { Component } from 'angular2/core';
import { COMMON_DIRECTIVES } from 'angular2/common';
import { Router } from 'angular2/router';

import { AccountService, IAccount } from '../../../services/account/account.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
    templateUrl: 'source/components/account/accountDetail/accountDetail.component.html',
	directives: [COMMON_DIRECTIVES],
})
export class AccountDetailComponent {
	account: IAccount;

	constructor(private accountService: AccountService
			, public authentication: AuthenticationService
			, private router: Router) {}

	ngOnInit(): void {
		this.accountService.getAccountForUser(this.authentication.activeUser)
			.subscribe((account: IAccount): IAccount => this.account = account);
	}

	startWithdrawal(): void {
		this.router.navigate(['Withdraw', { accountId: this.account._id }]);
	}

	startDeposit(): void {
		this.router.navigate(['Deposit', { accountId: this.account._id }]);
	}
}