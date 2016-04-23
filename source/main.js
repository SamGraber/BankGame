System.register(['angular2/router', 'angular2/http', 'toastr', 'rxjs/Rx', 'angular2/platform/browser', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, http_1, toastr, browser_1, app_component_1;
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
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            toastr.options = {
                positionClass: 'toast-top-right',
            };
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map