System.register(['@angular/core', '@angular/router', './components/login/login.component', './components/register/register.component', './components/account/account.component', './components/switchUser/switchUser.component', './services/authentication/authentication.service', './services/request/request.service', './services/account/account.service', './services/array/array.service'], function(exports_1, context_1) {
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
    var core_1, router_1, login_component_1, register_component_1, account_component_1, switchUser_component_1, authentication_service_1, request_service_1, account_service_1, array_service_1;
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
            function (account_component_1_1) {
                account_component_1 = account_component_1_1;
            },
            function (switchUser_component_1_1) {
                switchUser_component_1 = switchUser_component_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (request_service_1_1) {
                request_service_1 = request_service_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (array_service_1_1) {
                array_service_1 = array_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(authentication, router) {
                    this.authentication = authentication;
                    this.router = router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    if (this.authentication.restoreSession()) {
                        if (this.authentication.activeUser) {
                            this.router.navigate(['account/' + this.authentication.activeUser.accountId]);
                        }
                        else {
                            this.router.navigate(['switchUser']);
                        }
                    }
                    else {
                        this.router.navigate(['login']);
                    }
                };
                AppComponent.prototype.logout = function () {
                    this.authentication.logout();
                    if (!this.authentication.isAuthenticated) {
                        this.router.navigate(['login']);
                    }
                    else {
                        this.router.navigate(['switchUser']);
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'source/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [authentication_service_1.AuthenticationService, request_service_1.RequestService, account_service_1.AccountService, array_service_1.ArrayUtility],
                    }),
                    router_1.Routes([
                        { path: 'login', component: login_component_1.LoginComponent },
                        { path: 'register', component: register_component_1.RegisterComponent },
                        { path: 'account/:accountId', component: account_component_1.AccountComponent },
                        { path: 'switchUser', component: switchUser_component_1.SwitchUserComponent },
                    ]), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map