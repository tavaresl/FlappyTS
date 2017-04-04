"use strict";
var Handler = (function () {
    function Handler(_event, _callback) {
        this._event = _event;
        this._callback = _callback;
    }
    Object.defineProperty(Handler.prototype, "event", {
        get: function () {
            return this._event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Handler.prototype, "callback", {
        get: function () {
            return this._callback;
        },
        enumerable: true,
        configurable: true
    });
    return Handler;
}());
exports.Handler = Handler;
