import {Component} from 'angular2/core';
import { AuthenticationService, ICredentials } from '../../services/authentication/authentication.service';

@Component({
    templateUrl: 'source/components/login/login.component.html',
})
export class LoginComponent {
	model: ICredentials;
	
	constructor(private authenticationService: AuthenticationService) {}
	
	onSubmit(): void {
		console.log('Submitted');
	}
}