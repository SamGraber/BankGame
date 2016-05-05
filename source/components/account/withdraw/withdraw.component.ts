import * as _ from 'lodash';
import { Component } from '@angular/core';
import { Router, OnActivate, RouteSegment } from '@angular/router';
import { AccountService, IAccount } from '../../../services/account/account.service';

@Component({
	templateUrl: 'source/components/account/withdraw/withdraw.component.html',
})
export class WithdrawComponent implements OnActivate {
	account: IAccount;
	amount: number;

	constructor(private accountService: AccountService
			, private router: Router) {}

	routerOnActivate(routeSegment: RouteSegment): void {
		this.accountService.getAccount(routeSegment.getParam('accountId'))
			.subscribe((account: IAccount): IAccount => this.account = account);
	}

	withdraw(): void {
		const updatedAccount: IAccount = _.clone(this.account);
		updatedAccount.balance -= this.amount;
		this.accountService.updateAccount(updatedAccount).subscribe((): void => {
			this.router.navigate(['detail']);
		});
	}

	cancel(): void {
		this.router.navigate(['Detail']);
	}
}