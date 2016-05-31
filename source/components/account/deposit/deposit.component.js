System.register(['lodash', '@angular/core', '@angular/router', '../../../services/account/account.service', '../../../services/authentication/authentication.service'], function(exports_1, context_1) {
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
    var _, core_1, router_1, account_service_1, authentication_service_1;
    var DepositComponent;
    return {
        setters:[
            function (_1) {
                _ = _1;
            },
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
            }],
        execute: function() {
            DepositComponent = (function () {
                function DepositComponent(accountService, authentication, router) {
                    this.accountService = accountService;
                    this.authentication = authentication;
                    this.router = router;
                }
                DepositComponent.prototype.routerOnActivate = function (routeSegment) {
                    var _this = this;
                    this.accountService.getAccountForUser(this.authentication.activeUser)
                        .subscribe(function (account) { return _this.account = account; });
                };
                DepositComponent.prototype.deposit = function () {
                    var _this = this;
                    var updatedAccount = _.clone(this.account);
                    updatedAccount.balance += this.amount;
                    this.accountService.updateAccount(updatedAccount).subscribe(function () {
                        _this.router.navigate(['/account/' + _this.account._id]);
                    });
                };
                DepositComponent.prototype.cancel = function () {
                    this.router.navigate(['/account/' + this.account._id]);
                };
                DepositComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'source/components/account/deposit/deposit.component.html',
                    }), 
                    __metadata('design:paramtypes', [account_service_1.AccountService, authentication_service_1.AuthenticationService, router_1.Router])
                ], DepositComponent);
                return DepositComponent;
            }());
            exports_1("DepositComponent", DepositComponent);
        }
    }
});
//# sourceMappingURL=deposit.component.js.map