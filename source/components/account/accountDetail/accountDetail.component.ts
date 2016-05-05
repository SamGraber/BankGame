import { Component, OnInit } from '@angular/core';
import { COMMON_DIRECTIVES } from '@angular/common';
import { Router } from '@angular/router';

import { AccountService, IAccount } from '../../../services/account/account.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
    templateUrl: 'source/components/account/accountDetail/accountDetail.component.html',
	directives: [COMMON_DIRECTIVES],
})
export class AccountDetailComponent implements OnInit {
	account: IAccount;

	constructor(private accountService: AccountService
			, public authentication: AuthenticationService
			, private router: Router) {}

	ngOnInit(): void {
		this.accountService.getAccountForUser(this.authentication.activeUser)
			.subscribe((account: IAccount): IAccount => this.account = account);
	}

	startWithdrawal(): void {
		this.router.navigate(['withdraw', { accountId: this.account._id }]);
	}

	startDeposit(): void {
		this.router.navigate(['deposit', { accountId: this.account._id }]);
	}
}