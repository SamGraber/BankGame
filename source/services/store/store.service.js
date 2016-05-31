System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var StoreBackend, Store;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            StoreBackend = (function () {
                function StoreBackend() {
                }
                return StoreBackend;
            }());
            exports_1("StoreBackend", StoreBackend);
            Store = (function () {
                function Store(backend) {
                    this.backend = backend;
                }
                Store.prototype.get = function (key) {
                    return JSON.parse(this.backend[key]);
                };
                Store.prototype.set = function (value, key) {
                    if (value == null) {
                        this.backend.removeItem(key);
                        return;
                    }
                    this.backend[key] = JSON.stringify(value);
                };
                Store = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [StoreBackend])
                ], Store);
                return Store;
            }());
            exports_1("Store", Store);
        }
    }
});
//# sourceMappingURL=store.service.js.map