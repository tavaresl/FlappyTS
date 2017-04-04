System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Context;
    return {
        setters: [],
        execute: function () {
            Context = (function () {
                function Context(scope, status) {
                    if (status === void 0) { status = 1; }
                    this._scope = scope;
                    this._status = status;
                }
                Object.defineProperty(Context.prototype, "scope", {
                    get: function () {
                        return this._scope;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Context.prototype, "status", {
                    get: function () {
                        return this._status + 0;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Context;
            }());
            exports_1("Context", Context);
        }
    };
});
