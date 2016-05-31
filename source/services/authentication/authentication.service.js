System.register(['lodash', '@angular/core', '../request/request.service', '../store/store.service', '../array/array.service'], function(exports_1, context_1) {
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
    var _, core_1, request_service_1, store_service_1, array_service_1;
    var AuthenticationService;
    return {
        setters:[
            function (_1) {
                _ = _1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (request_service_1_1) {
                request_service_1 = request_service_1_1;
            },
            function (store_service_1_1) {
                store_service_1 = store_service_1_1;
            },
            function (array_service_1_1) {
                array_service_1 = array_service_1_1;
            }],
        execute: function() {
            AuthenticationService = (function () {
                function AuthenticationService(http, store, array) {
                    var _this = this;
                    this.http = http;
                    this.store = store;
                    this.array = array;
                    this.isAuthenticated = false;
                    this.loggedInUsers = [];
                    this.authenticate = function (user) {
                        _this.activeUser = user;
                        _this.loggedInUsers.push(user);
                        _this.isAuthenticated = true;
                        _this.store.set(_this.loggedInUsers, 'loggedInUsers');
                        return _this.activeUser;
                    };
                }
                AuthenticationService.prototype.restoreSession = function () {
                    if (this.store.get('loggedInUsers')) {
                        this.loggedInUsers = this.store.get('loggedInUsers');
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
                    this.store.set(this.loggedInUsers, 'loggedInUsers');
                    if (!_.some(this.loggedInUsers)) {
                        this.isAuthenticated = false;
                    }
                };
                AuthenticationService.prototype.register = function (credentials) {
                    return this.http.post('/api/users/register', credentials)
                        .map(this.authenticate);
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [request_service_1.RequestService, store_service_1.Store, array_service_1.ArrayUtility])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
//# sourceMappingURL=authentication.service.js.map