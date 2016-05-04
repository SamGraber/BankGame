import { Component OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';
import { ARRAY_PROVIDER } from 'typescript-angular-utilities/source/services/array/array.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { SwitchUserComponent } from './components/switchUser/switchUser.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { RequestService } from './services/request/request.service';
import { AccountService } from './services/account/account.service';

@Component({
    selector: 'my-app',
    templateUrl: 'source/app.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [AuthenticationService, RequestService, AccountService, ARRAY_PROVIDER],
})
@Routes([
  { path:'/login',       component: LoginComponent },
  { path:'/register',    component: RegisterComponent },
  { path:'/account/...', component: AccountComponent },
  { path:'/switchUser',  component: SwitchUserComponent },
])
export class AppComponent implements OnInit {
	constructor(public authentication: AuthenticationService
						, private router: Router) {}

	ngOnInit(): void {
		if (this.authentication.restoreSession()) {
			if (this.authentication.activeUser) {
				this.router.navigate(['Account']);
			} else {
				this.router.navigate(['SwitchUser']);
			}
		} else {
			this.router.navigate(['Login']);
		}
	}

	logout(): void {
		this.authentication.logout();
		if (!this.authentication.isAuthenticated) {
			this.router.navigate(['Login']);
		} else {
			this.router.navigate(['SwitchUser']);
		}
	}
}