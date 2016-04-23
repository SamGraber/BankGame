import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MainComponent} from './components/main/main.component';
import {AuthenticationService} from './services/authentication/authentication.service';

@Component({
    selector: 'my-app',
    template: `
		<h1>Bank Game</h1>
		<ul class="nav nav-tabs" *ngIf="authentication.isAuthenticated">
			<li role="presentation"><a [routerLink]="['Main']">Main</a></li>
		</ul>
		<ul class="nav nav-tabs" *ngIf="!authentication.isAuthenticated">
			<li role="presentation"><a [routerLink]="['Login']">Login</a></li>
			<li role="presentation"><a [routerLink]="['Register']">Register</a></li>
		</ul>
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [AuthenticationService],
})
@RouteConfig([
  {path:'/login',    name: 'Login',      component: LoginComponent},
  {path:'/register', name: 'Register',   component: RegisterComponent},
//   {path:'/user',  name: 'Profile', component: HeroListComponent},
//   {path:'/bank',  name: 'Bank',    component: HeroDetailComponent}
  {path:'/main',  name: 'Main',    component: MainComponent}
])
export class AppComponent { 
	constructor(public authentication: AuthenticationService) {}
}