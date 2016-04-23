import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';
import { AuthenticationService, ICredentials } from '../../services/authentication/authentication.service';

@Component({
    templateUrl: 'source/components/login/login.component.html',
	directives: [FORM_DIRECTIVES],
})
export class LoginComponent {
	model: ICredentials = <any>{};
	
	constructor(private router: Router
			, private authenticationService: AuthenticationService) {}
	
	onSubmit(): void {
		this.authenticationService.login(this.model).subscribe(() => {
			this.router.navigate(['Account']);
		});
	}
}