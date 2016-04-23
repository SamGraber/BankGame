import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {AccountComponent} from './components/account/account.component';
import {AuthenticationService} from './services/authentication/authentication.service';
import {RequestService} from './services/request/request.service';
import {AccountService} from './services/account/account.service';

@Component({
    selector: 'my-app',
    templateUrl: 'source/app.component.html',
	directives: [ROUTER_DIRECTIVES],
	providers: [AuthenticationService, RequestService, AccountService],
})
@RouteConfig([
  {path:'/login',    name: 'Login',      component: LoginComponent},
  {path:'/register', name: 'Register',   component: RegisterComponent},
//   {path:'/user',  name: 'Profile', component: HeroListComponent},
//   {path:'/bank',  name: 'Bank',    component: HeroDetailComponent}
  {path:'/account',  name: 'Account',    component: AccountComponent}
])
export class AppComponent { 
	constructor(public authentication: AuthenticationService
						, private router: Router) {}
	
	ngOnInit(): void {
		if (this.authentication.restoreSession()) {
			this.router.navigate(['Account']);
		} else {
			this.router.navigate(['Login']);
		}
	}
}