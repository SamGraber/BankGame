System.register(['angular2/core', 'angular2/router', '../../services/account/account.service', '../../services/authentication/authentication.service', './accountDetail/accountDetail.component', './withdraw/withdraw.component', './deposit/deposit.component'], function(exports_1, context_1) {
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
    var core_1, router_1, account_service_1, authentication_service_1, accountDetail_component_1, withdraw_component_1, deposit_component_1;
    var AccountComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (accountDetail_component_1_1) {
                accountDetail_component_1 = accountDetail_component_1_1;
            },
            function (withdraw_component_1_1) {
                withdraw_component_1 = withdraw_component_1_1;
            },
            function (deposit_component_1_1) {
                deposit_component_1 = deposit_component_1_1;
            }],
        execute: function() {
            AccountComponent = (function () {
                function AccountComponent(accountService, authentication) {
                    this.accountService = accountService;
                    this.authentication = authentication;
                }
                AccountComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.accountService.getAccountForUser(this.authentication.loggedInUser)
                        .subscribe(function (account) { return _this.account = account; });
                    this.accountService.accountChanges
                        .subscribe(function (updatedAccount) { return _this.account = updatedAccount; });
                };
                AccountComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'source/components/account/account.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Detail', component: accountDetail_component_1.AccountDetailComponent, useAsDefault: true },
                        { path: '/withdraw/:accountId', name: 'Withdraw', component: withdraw_component_1.WithdrawComponent },
                        { path: '/deposit/:accountId', name: 'Deposit', component: deposit_component_1.DepositComponent },
                    ]), 
                    __metadata('design:paramtypes', [account_service_1.AccountService, authentication_service_1.AuthenticationService])
                ], AccountComponent);
                return AccountComponent;
            }());
            exports_1("AccountComponent", AccountComponent);
        }
    }
});
//# sourceMappingURL=account.component.js.map