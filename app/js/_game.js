/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.game = function() {

    var init =  function() {
        window.marsoniansGame = new Phaser.Game(
            800, 600,
            Phaser.AUTO,
            'game-container',
            {
                init: init,
                preload: preload,
                update: update,
                create: create
            }
        );

        window.globAlienCount = 3;
        window.globShootSpeed = 0.2;
        window.globAliens = undefined;

        // Game: Init
        function init() {
            marsonians.init();
        };

        // Game: Preload
        function preload() {
            marsonians.preload();
        };

        // Game: Create
        function create() {
            marsonians.create();
        };

        // Game: Update
        function update() {
            marsonians.update();
        };
    }();
};
