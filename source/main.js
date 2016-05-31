System.register(['@angular/router', '@angular/http', 'toastr', 'rxjs/Rx', '@angular/platform-browser-dynamic', './app.component', './services/store/store.browser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, http_1, toastr, platform_browser_dynamic_1, app_component_1, store_browser_1;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (toastr_1) {
                toastr = toastr_1;
            },
            function (_1) {},
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (store_browser_1_1) {
                store_browser_1 = store_browser_1_1;
            }],
        execute: function() {
            toastr.options = {
                positionClass: 'toast-top-right',
            };
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                store_browser_1.BROWSER_STORE_PROVIDERS,
            ]);
        }
    }
});
//# sourceMappingURL=main.js.map