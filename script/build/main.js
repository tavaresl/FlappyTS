System.register(["./common/Game"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Game_1;
    return {
        setters: [
            function (Game_1_1) {
                Game_1 = Game_1_1;
            }
        ],
        execute: function () {
            Game_1.Game.init();
        }
    };
});
