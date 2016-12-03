/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.menuState = function() {};

marsonians.menuState.prototype = {
    preload: function() {

    },

    create: function() {
        // Helper
        var calculateAspectRatioFit = function(srcWidth, srcHeight, maxWidth, maxHeight) {
            var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

            return {
                width: srcWidth * ratio,
                height: srcHeight * ratio
            };
        };


        // Cursor
        marsonians.cursor.init();


        // background
        marsonians.gameBackground.setBack();
        marsonians.gameBackground.setAstronaugthy();


        // Logo
        var logo = marsoniansGame.add.image(marsoniansGame.world.centerX, marsoniansGame.world.centerY / 1.5, 'logo');
        var logoMaxWidth = globWidth / 1.1;
        var logoMaxHeigth = 184;

        if (globWidth > 500) {
            logoMaxWidth = globWidth / 1.5;
        }

        var logoSizes = calculateAspectRatioFit(1082, 163, logoMaxWidth, logoMaxHeigth);

        logo.anchor.setTo(0.5, 0.5);
        logo.width = logoSizes.width;
        logo.height = logoSizes.height;


        // Start game to game
        var startGame = function() {
            marsoniansGame.state.start('game', true, false);
            gameCanvas.classList.add('game--active');
        };

        var startButton = marsoniansGame.add.button(marsoniansGame.world.centerX, marsoniansGame.world.centerY * 1.2, 'startButton', startGame, this, 2, 1, 0);
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

    update: function() {
        marsonians.gameBackground.updateBack();
        marsonians.gameBackground.updateAstronaughty();
    }
};
