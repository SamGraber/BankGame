System.register(['angular2/core', 'angular2/common', 'angular2/router', '../../../services/account/account.service', '../../../services/authentication/authentication.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, account_service_1, authentication_service_1;
    var AccountDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            AccountDetailComponent = (function () {
                function AccountDetailComponent(accountService, authentication, router) {
                    this.accountService = accountService;
                    this.authentication = authentication;
                    this.router = router;
                }
                AccountDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.accountService.getAccountForUser(this.authentication.loggedInUser)
                        .subscribe(function (account) { return _this.account = account; });
                };
                AccountDetailComponent.prototype.startWithdrawal = function () {
                    this.router.navigate(['Withdraw', { accountId: this.account._id }]);
                };
                AccountDetailComponent.prototype.startDeposit = function () {
                    this.router.navigate(['Deposit', { accountId: this.account._id }]);
                };
                AccountDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'source/components/account/accountDetail/accountDetail.component.html',
                        directives: [common_1.COMMON_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [account_service_1.AccountService, authentication_service_1.AuthenticationService, router_1.Router])
                ], AccountDetailComponent);
                return AccountDetailComponent;
            }());
            exports_1("AccountDetailComponent", AccountDetailComponent);
        }
    }
});
//# sourceMappingURL=accountDetail.component.js.map