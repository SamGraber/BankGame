System.register(['angular2/core', '../request/request.service'], function(exports_1, context_1) {
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
    var core_1, request_service_1;
    var AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (request_service_1_1) {
                request_service_1 = request_service_1_1;
            }],
        execute: function() {
            AuthenticationService = (function () {
                function AuthenticationService(http) {
                    this.http = http;
                    this.isAuthenticated = false;
                }
                AuthenticationService.prototype.login = function (credentials) {
                    var _this = this;
                    return this.http.post('/users/login', credentials)
                        .map(function (user) {
                        _this.loggedInUser = user;
                        console.log(user.username + ' is now logged in');
                        _this.isAuthenticated = true;
                        return _this.loggedInUser;
                    });
                };
                AuthenticationService.prototype.register = function (credentials) {
                    var _this = this;
                    return this.http.post('/users/register', credentials)
                        .map(function (user) {
                        _this.loggedInUser = user;
                        _this.isAuthenticated = true;
                        return _this.loggedInUser;
                    });
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [request_service_1.RequestService])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
//# sourceMappingURL=authentication.service.js.map