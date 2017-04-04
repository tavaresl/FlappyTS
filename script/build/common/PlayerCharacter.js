System.register(["./Component"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Component_1, PlayerCharacter;
    return {
        setters: [
            function (Component_1_1) {
                Component_1 = Component_1_1;
            }
        ],
        execute: function () {
            PlayerCharacter = (function (_super) {
                __extends(PlayerCharacter, _super);
                function PlayerCharacter() {
                    var _this = _super.call(this) || this;
                    window.addEventListener('keyup', function (event) {
                        if (event.keyCode == 32) {
                            _this.notify('jump', _this);
                        }
                    });
                    return _this;
                }
                return PlayerCharacter;
            }(Component_1.Component));
            exports_1("PlayerCharacter", PlayerCharacter);
        }
    };
});
