import {Component} from 'angular2/core';
import { AccountService, IAccount } from '../../services/account/account.service';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
    templateUrl: 'source/components/account/account.component.html',
})
export class AccountComponent {
	account: IAccount;
	
	constructor(private accountService: AccountService
			, private authentication: AuthenticationService) {}
	
	ngOnInit(): void {
		this.accountService.getAccount(this.authentication.loggedInUser)
			.subscribe((account: IAccount): IAccount => this.account = account);
	}
}