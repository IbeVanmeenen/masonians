/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.deadState = () => {};

marsonians.deadState.prototype = {
    create: () => {
        // Helper
        const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth, maxHeight) => {
            const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

            return {
                width: srcWidth * ratio,
                height: srcHeight * ratio
            };
        };


        // Add Game-Over animation
        const gameOverSprite = marsoniansGame.add.sprite((marsoniansGame.world.centerX - 100), 20, 'game-over');
        const gameOverAni = gameOverSprite.animations.add('gameOverAni1', Phaser.Animation.generateFrameNames('game-over_', 0, 79, '', 5));

        gameOverAni.loop = false;
        gameOverAni.play(20);


        // Restart Game
        const restartGame = () => {
            marsonians.audio.button();

            globLifeCount = 3;
            globAlienCount = 3;
            globShootSpeed = 3;
            globAliensFront = undefined;
            globAliensBack = undefined;

            marsoniansGame.state.start('game', true, false);
        };


        // Start button
        const startButton = marsoniansGame.add.button(marsoniansGame.world.centerX, ((marsoniansGame.world.centerY * 2) - 80), 'restartButton', restartGame, this, 2, 1, 0);
        let startButtonMaxWidth = globWidth / 2;
        let startButtonMaxHeigth = 184;

        if (globWidth > 500) {
            startButtonMaxWidth = 250;
        }

        const startButtonSizes = calculateAspectRatioFit(600, 184, startButtonMaxWidth, startButtonMaxHeigth);

        startButton.anchor.setTo(0.5, 0.5);
        startButton.width = startButtonSizes.width;
        startButton.height = startButtonSizes.height;

        startButton.inputEnabled = true;
        startButton.input.useHandCursor = true;


        // Print score
        marsonians.score.printFinal();
    }
};
