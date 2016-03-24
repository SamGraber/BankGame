import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {LoginComponent} from './login.component';

@Component({
    selector: 'my-app',
    template: `
		<h1>Bank Game</h1>
		<nav>
			<a [routerLink]="['Login']">Login</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  {path:'/login', name: 'Login',   component: LoginComponent},
//   {path:'/user',  name: 'Profile', component: HeroListComponent},
//   {path:'/bank',  name: 'Bank',    component: HeroDetailComponent}
])
export class AppComponent { }