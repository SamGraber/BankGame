import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/common';
import {Router} from '@angular/router';
import { AuthenticationService, ICredentials } from '../../services/authentication/authentication.service';

@Component({
    templateUrl: 'source/components/register/register.component.html',
	directives: [FORM_DIRECTIVES],
})
export class RegisterComponent {
	model: ICredentials = <any>{};

	constructor(private router: Router
			, private authenticationService: AuthenticationService) {}

	onSubmit(): void {
		this.authenticationService.register(this.model).subscribe(() => {
			this.router.navigate(['Account']);
		});
	}
}