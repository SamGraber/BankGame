import * as _ from 'lodash';
import { Component OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router';
import { AccountService, IAccount } from '../../../services/account/account.service';

@Component({
	templateUrl: 'source/components/account/deposit/deposit.component.html',
})
export class DepositComponent implements OnInit {
	account: IAccount;
	amount: number;

	constructor(private accountService: AccountService
			, private routeParams: RouteParams
			, private router: Router) {}

	ngOnInit(): void {
		this.accountService.getAccount(this.routeParams.get('accountId'))
			.subscribe((account: IAccount): IAccount => this.account = account);
	}

	deposit(): void {
		const updatedAccount: IAccount = _.clone(this.account);
		updatedAccount.balance += this.amount;
		this.accountService.updateAccount(updatedAccount).subscribe((): void => {
			this.router.navigate(['Detail']);
		});
	}

	cancel(): void {
		this.router.navigate(['Detail']);
	}
}