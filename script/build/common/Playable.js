System.register(["./Component"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Component_1, Playable;
    return {
        setters: [
            function (Component_1_1) {
                Component_1 = Component_1_1;
            }
        ],
        execute: function () {
            Playable = (function (_super) {
                __extends(Playable, _super);
                function Playable() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return Playable;
            }(Component_1.Component));
            exports_1("Playable", Playable);
        }
    };
});
