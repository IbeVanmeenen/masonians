/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.deadState = function() {};

marsonians.deadState.prototype = {
    preload: function() {

    },

    create: function() {
        // Add explosion animation
        var icon = marsoniansGame.add.sprite(marsoniansGame.world.centerX - 100, marsoniansGame.world.centerY - 100, 'game-over');

        var gameOverAni = icon.animations.add('gameOverAni1', Phaser.Animation.generateFrameNames('game-over_', 0, 79, '', 5));
        gameOverAni.loop = false;
        gameOverAni.onComplete.add(function() {

        });

        gameOverAni.play(20);
    },

    update: function() {

    }
};
