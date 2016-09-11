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
        marsonians.gameBackground.setAstronaugthy();

        // Logo
        var calculateAspectRatioFit = function(srcWidth, srcHeight, maxWidth, maxHeight) {
            var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

            return {
                width: srcWidth * ratio,
                height: srcHeight * ratio
            };
        }

        var logo = marsoniansGame.add.image(marsoniansGame.world.centerX, marsoniansGame.world.centerY / 1.5, 'logo');
        var logoSizes = calculateAspectRatioFit(1082, 163, globWidth / 1.5, 163);
        logo.anchor.setTo(0.5, 0.5);
        logo.width = logoSizes.width;
        logo.height = logoSizes.height;


        // Start game to game
        var startGame = function() {
            marsoniansGame.state.start('game', true, false);
            gameCanvas.classList.add('game--active');
        };

        var startButton = marsoniansGame.add.button(marsoniansGame.world.centerX, marsoniansGame.world.centerY * 1.2, 'startButton', startGame, this, 2, 1, 0);
        startButton.anchor.setTo(0.5, 0.5);
        startButton.scale.setTo(0.5, 0.5);
    },

    update: function() {
        marsonians.gameBackground.updateBack();
        marsonians.gameBackground.updateAstronaughty();
    }
};
