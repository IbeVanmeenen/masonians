/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.deadState = function() {};

marsonians.deadState.prototype = {
    preload: function() {},

    create: function() {
        // Helper
        var calculateAspectRatioFit = function(srcWidth, srcHeight, maxWidth, maxHeight) {
            var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

            return {
                width: srcWidth * ratio,
                height: srcHeight * ratio
            };
        };


        // Add game over animation
        var gameOverSprite = marsoniansGame.add.sprite(marsoniansGame.world.centerX - 100, marsoniansGame.world.centerY / 2, 'game-over'),
            gameOverAni = gameOverSprite.animations.add('gameOverAni1', Phaser.Animation.generateFrameNames('game-over_', 0, 79, '', 5));

        gameOverAni.loop = false;
        gameOverAni.play(20);


        // Start game to game
        var restartGame = function() {
            marsonians.audio.button();

            globLifeCount = 3;
            globAlienCount = 3;
            globShootSpeed = 3;
            globAliensFront = undefined;
            globAliensBack = undefined;

            marsoniansGame.state.start('game', true, false);
        };

        var startButton = marsoniansGame.add.button(marsoniansGame.world.centerX, marsoniansGame.world.centerY * 1.2, 'restartButton', restartGame, this, 2, 1, 0);
        var startButtonMaxWidth = globWidth / 2;
        var startButtonMaxHeigth = 184;

        if (globWidth > 500) {
            startButtonMaxWidth = 250;
        }

        var startButtonSizes = calculateAspectRatioFit(600, 184, startButtonMaxWidth, startButtonMaxHeigth);

        startButton.anchor.setTo(0.5, 0.5);
        startButton.width = startButtonSizes.width;
        startButton.height = startButtonSizes.height;

        startButton.inputEnabled = true;
        startButton.input.useHandCursor = true;
    },

    update: function() {}
};
