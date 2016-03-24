System.register(['es6-shim/es6-shim.min', 'angular2/es6/dev/src/testing/shims_for_IE', 'angular2/bundles/angular2-polyfills', 'rxjs/bundles/Rx', 'angular2/bundles/angular2.dev', 'angular2/bundles/router.dev', 'angular2/router', 'angular2/platform/browser', './app.component'], function(exports_1) {
    var router_1, browser_1, app_component_1;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map