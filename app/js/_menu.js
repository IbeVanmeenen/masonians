/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.menuState = function() {};

marsonians.menuState.prototype = {
    preload: function() {

    },

    create: function() {
        console.log('menu');

        // Cursor
        marsonians.cursor.init();

        // background
        marsonians.gameBackground.setBack();
        // marsoniansGame.stage.backgroundColor = '#ffb37e';

        // Start game to game
        var startGame = function() {
            marsoniansGame.state.start('game', true, false);
            gameCanvas.classList.add('game--active');
        };

        // var startButton = marsoniansGame.add.button(marsoniansGame.world.centerX - 250, marsoniansGame.world.centerY - 95, 'startButton', startGame, this, 2, 1, 0);
    },

    update: function() {
        marsonians.gameBackground.update();
    }
};
