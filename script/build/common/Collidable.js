System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Collidable;
    return {
        setters: [],
        execute: function () {
            Collidable = (function () {
                function Collidable() {
                }
                Object.defineProperty(Collidable.prototype, "boundingBox", {
                    get: function () {
                        return this._boundingBox;
                    },
                    enumerable: true,
                    configurable: true
                });
                Collidable.prototype.isCollidingWith = function (object) {
                    return object.boundingBox.isOverlapping(this._boundingBox);
                };
                return Collidable;
            }());
            exports_1("Collidable", Collidable);
        }
    };
});
