System.register(['lodash', 'angular2/core', 'typescript-angular-utilities/source/services/array/array.service', '../request/request.service'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var _, core_1, array_service_1, request_service_1;
    var AuthenticationService;
    return {
        setters:[
            function (_1) {
                _ = _1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (array_service_1_1) {
                array_service_1 = array_service_1_1;
            },
            function (request_service_1_1) {
                request_service_1 = request_service_1_1;
            }],
        execute: function() {
            AuthenticationService = (function () {
                function AuthenticationService(http, array) {
                    var _this = this;
                    this.http = http;
                    this.array = array;
                    this.isAuthenticated = false;
                    this.loggedInUsers = [];
                    this.authenticate = function (user) {
                        _this.activeUser = user;
                        _this.loggedInUsers.push(user);
                        _this.isAuthenticated = true;
                        localStorage.loggedInUsers = JSON.stringify(_this.loggedInUsers);
                        return _this.activeUser;
                    };
                }
                AuthenticationService.prototype.restoreSession = function () {
                    if (localStorage.loggedInUsers) {
                        this.loggedInUsers = JSON.parse(localStorage.loggedInUsers);
                        if (this.loggedInUsers.length === 1) {
                            this.activeUser = this.loggedInUsers[0];
                        }
                        this.isAuthenticated = true;
                        return true;
                    }
                    return false;
                };
                AuthenticationService.prototype.login = function (credentials) {
                    return this.http.post('/api/users/login', credentials)
                        .map(this.authenticate);
                };
                AuthenticationService.prototype.logout = function () {
                    this.array.remove(this.loggedInUsers, this.activeUser);
                    this.activeUser = null;
                    if (_.some(this.loggedInUsers)) {
                        localStorage.loggedInUsers = JSON.stringify(this.loggedInUsers);
                    }
                    else {
                        localStorage.removeItem('loggedInUser');
                        this.isAuthenticated = false;
                    }
                };
                AuthenticationService.prototype.register = function (credentials) {
                    return this.http.post('/api/users/register', credentials)
                        .map(this.authenticate);
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(),
                    __param(1, core_1.Inject(array_service_1.arrayToken)), 
                    __metadata('design:paramtypes', [request_service_1.RequestService, Object])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
//# sourceMappingURL=authentication.service.js.map