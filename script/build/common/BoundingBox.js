System.register(["./Component"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Component_1, BoundingBox;
    return {
        setters: [
            function (Component_1_1) {
                Component_1 = Component_1_1;
            }
        ],
        execute: function () {
            BoundingBox = (function (_super) {
                __extends(BoundingBox, _super);
                function BoundingBox() {
                    return _super.call(this) || this;
                }
                Object.defineProperty(BoundingBox.prototype, "base", {
                    get: function () {
                        var DIFF = this._originX - this._endX;
                        return Math.abs(DIFF);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BoundingBox.prototype, "height", {
                    get: function () {
                        var DIFF = this._originY - this._endY;
                        return Math.abs(DIFF);
                    },
                    enumerable: true,
                    configurable: true
                });
                BoundingBox.prototype.isOverlapping = function (other) {
                    if ((other._endX > this._originX && other._originX < this._endX)
                        || (other._endY > this._originY && other._originY < this._endY)) {
                        return true;
                    }
                    return false;
                };
                return BoundingBox;
            }(Component_1.Component));
            exports_1("BoundingBox", BoundingBox);
        }
    };
});
