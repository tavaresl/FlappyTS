"use strict";
var Handler_1 = require("./Handler");
var Component = (function () {
    function Component() {
    }
    Component.prototype.subscribe = function (event, callback) {
        this._handlers.push(new Handler_1.Handler(event, callback));
    };
    Component.prototype.unsubscribe = function (event, callback) {
        this._handlers = this._handlers.filter(function (handler) {
            return handler.event != event && handler.callback != callback;
        });
        return true;
    };
    Component.prototype.notify = function (event, context) {
        if (context === void 0) { context = this; }
        this._handlers.filter(function (handler) { return handler.event == event; })
            .forEach(function (handler) { return handler.callback(context); });
    };
    return Component;
}());
exports.Component = Component;
