System.register(['lodash', 'angular2/core', 'angular2/router', '../../services/account/account.service'], function(exports_1, context_1) {
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
    var _, core_1, router_1, account_service_1;
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
            }],
        execute: function() {
            DepositComponent = (function () {
                function DepositComponent(accountService, routeParams, router) {
                    this.accountService = accountService;
                    this.routeParams = routeParams;
                    this.router = router;
                }
                DepositComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.accountService.getAccount(this.routeParams.get('accountId'))
                        .subscribe(function (account) { return _this.account = account; });
                };
                DepositComponent.prototype.deposit = function () {
                    var _this = this;
                    var updatedAccount = _.clone(this.account);
                    updatedAccount.balance += this.amount;
                    this.accountService.updateAccount(updatedAccount).subscribe(function () {
                        _this.router.navigate(['Account']);
                    });
                };
                DepositComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'source/components/deposit/deposit.component.html',
                    }), 
                    __metadata('design:paramtypes', [account_service_1.AccountService, router_1.RouteParams, router_1.Router])
                ], DepositComponent);
                return DepositComponent;
            }());
            exports_1("DepositComponent", DepositComponent);
        }
    }
});
//# sourceMappingURL=deposit.component.js.map