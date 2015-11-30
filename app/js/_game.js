/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.game = function() {

    var init =  function() {
        window.marsoniansGame = new Phaser.Game(
            1280, 800,
            Phaser.AUTO,
            'game-container',
            {
                init: init,
                preload: preload,
                update: update,
                create: create
            }
        );

        window.globLifeCount = 3;
        window.globAlienCount = 3;
        window.globShootSpeed = 3;
        window.globAliens = undefined;

        // Game: Init
        function init() {
            marsonians.alien();
            marsonians.difficulty();
            marsonians.life();

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
