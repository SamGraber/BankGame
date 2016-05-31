import * as _ from 'lodash';
import { Component } from '@angular/core';
import { Router, OnActivate, RouteSegment } from '@angular/router';

import { AccountService, IAccount } from '../../../services/account/account.service';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
	templateUrl: 'source/components/account/deposit/deposit.component.html',
})
export class DepositComponent implements OnActivate {
	account: IAccount;
	amount: number;

	constructor(private accountService: AccountService
			, public authentication: AuthenticationService
			, private router: Router) {}

	routerOnActivate(routeSegment: RouteSegment): void {
		this.accountService.getAccountForUser(this.authentication.activeUser)
			.subscribe((account: IAccount): IAccount => this.account = account);
	}

	deposit(): void {
		const updatedAccount: IAccount = _.clone(this.account);
		updatedAccount.balance += this.amount;
		this.accountService.updateAccount(updatedAccount).subscribe((): void => {
			this.router.navigate(['/account/' + this.account._id]);
		});
	}

	cancel(): void {
		this.router.navigate(['/account/' + this.account._id]);
	}
}