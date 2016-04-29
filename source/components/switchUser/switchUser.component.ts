import { Component } from 'angular2/core';
import { COMMON_DIRECTIVES } from 'angular2/common';
import { Router } from 'angular2/router';
import { AuthenticationService, IUser } from '../../services/authentication/authentication.service';

@Component({
	templateUrl: 'source/components/switchUser/switchUser.component.html',
	directives: [COMMON_DIRECTIVES],
})
export class SwitchUserComponent {
	constructor(public authentication: AuthenticationService
			, private router: Router) { }

	switch(user: IUser): void {
		this.authentication.activeUser = user;
		this.router.navigate(['Account']);
	}
}