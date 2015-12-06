/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.game = function() {

    var init =  function() {
        window.gameCanvas = document.getElementById('game-container');
        window.globDevicePixelRatio = window.devicePixelRatio;
        window.globWidth = window.innerWidth * globDevicePixelRatio;
        window.globHeight = window.innerHeight * globDevicePixelRatio;
        window.globLifeCount = 3;
        window.globAlienCount = 3;
        window.globShootSpeed = 3;
        window.globAliens = undefined;

        if (window.globWidth > 2000) {
            globWidth = window.innerWidth;
            globHeight = window.innerHeight;
        }

        window.marsoniansGame = new Phaser.Game(
            globWidth, globHeight,
            Phaser.AUTO,
            'game-container',
            {
                init: init,
                preload: preload,
                update: update,
                create: create
            }
        );

        // Game: Init
        function init() {
            marsonians.init();
        }

        // Game: Preload
        function preload() {
            marsonians.preload();
        }

        // Game: Create
        function create() {
            marsonians.create();
        }

        // Game: Update
        function update() {
            marsonians.update();
        }
    }();
};
