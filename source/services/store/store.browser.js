System.register(['angular2/core', './store.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, store_service_1;
    var BROWSER_STORE_PROVIDERS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (store_service_1_1) {
                store_service_1 = store_service_1_1;
            }],
        execute: function() {
            exports_1("BROWSER_STORE_PROVIDERS", BROWSER_STORE_PROVIDERS = [
                core_1.provide(store_service_1.StoreBackend, { useValue: localStorage }),
                store_service_1.Store,
            ]);
        }
    }
});
//# sourceMappingURL=store.browser.js.map