System.register(['angular2/core', 'angular2/router', './components/login/login.component', './components/register/register.component', './components/main/main.component', './services/authentication/authentication.service', './services/request/request.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_component_1, register_component_1, main_component_1, authentication_service_1, request_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (main_component_1_1) {
                main_component_1 = main_component_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (request_service_1_1) {
                request_service_1 = request_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(authentication) {
                    this.authentication = authentication;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<h1>Bank Game</h1>\n\t\t<ul class=\"nav nav-tabs\" *ngIf=\"authentication.isAuthenticated\">\n\t\t\t<li role=\"presentation\"><a [routerLink]=\"['Main']\">Main</a></li>\n\t\t</ul>\n\t\t<ul class=\"nav nav-tabs\" *ngIf=\"!authentication.isAuthenticated\">\n\t\t\t<li role=\"presentation\"><a [routerLink]=\"['Login']\">Login</a></li>\n\t\t\t<li role=\"presentation\"><a [routerLink]=\"['Register']\">Register</a></li>\n\t\t</ul>\n\t\t<router-outlet></router-outlet>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [authentication_service_1.AuthenticationService, request_service_1.RequestService],
                    }),
                    router_1.RouteConfig([
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/register', name: 'Register', component: register_component_1.RegisterComponent },
                        //   {path:'/user',  name: 'Profile', component: HeroListComponent},
                        //   {path:'/bank',  name: 'Bank',    component: HeroDetailComponent}
                        { path: '/main', name: 'Main', component: main_component_1.MainComponent }
                    ]), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map