/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.menuState = function() {};

marsonians.menuState.prototype = {
    preload: function() {

    },

    create: function() {
        console.log('menu');

        // Start game to game
        var startGame = function() {
            marsoniansGame.state.start('game');
        };

        var startButton = marsoniansGame.add.button(marsoniansGame.world.centerX - 250, marsoniansGame.world.centerY - 95, 'startButton', startGame, this, 2, 1, 0);

    },

    update: function() {

    }
};
