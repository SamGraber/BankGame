System.register(['angular2/core', 'rxjs/Subject', '../request/request.service'], function(exports_1, context_1) {
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
    var core_1, Subject_1, request_service_1;
    var AccountService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (request_service_1_1) {
                request_service_1 = request_service_1_1;
            }],
        execute: function() {
            AccountService = (function () {
                function AccountService(http) {
                    this.http = http;
                    this.accountChanges = new Subject_1.Subject();
                }
                AccountService.prototype.getAccount = function (accountId) {
                    return this.http.get('/api/account/' + accountId);
                };
                AccountService.prototype.getAccountForUser = function (user) {
                    return this.getAccount(user.accountId);
                };
                AccountService.prototype.updateAccount = function (account) {
                    var _this = this;
                    return this.http.put('api/account/' + account._id, account)
                        .map(function (updatedAccount) {
                        _this.accountChanges.next(updatedAccount);
                        return updatedAccount;
                    });
                };
                AccountService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [request_service_1.RequestService])
                ], AccountService);
                return AccountService;
            }());
            exports_1("AccountService", AccountService);
        }
    }
});
//# sourceMappingURL=account.service.js.map