System.register(['lodash'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var _;
    var ArrayUtility;
    return {
        setters:[
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            ArrayUtility = (function () {
                function ArrayUtility() {
                }
                ArrayUtility.prototype.remove = function (array, item) {
                    _.remove(array, function (x) { return x === item; });
                };
                return ArrayUtility;
            }());
            exports_1("ArrayUtility", ArrayUtility);
        }
    }
});
//# sourceMappingURL=array.service.js.map