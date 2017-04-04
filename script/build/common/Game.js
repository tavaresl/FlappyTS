System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Game;
    return {
        setters: [],
        execute: function () {
            Game = (function () {
                function Game() {
                }
                Game.init = function () {
                    console.log('Initializing');
                };
                return Game;
            }());
            exports_1("Game", Game);
        }
    };
});
