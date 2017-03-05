/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.menuState = function() {};

marsonians.menuState.prototype = {
    preload: function() {
        // Add loading animation
        var loadingSprite = marsoniansGame.add.sprite(marsoniansGame.world.centerX - 100, marsoniansGame.world.centerY - 100, 'loading'),
            loadingAni = loadingSprite.animations.add('loadingAni1', Phaser.Animation.generateFrameNames('loading_', 0, 80, '', 5));

        loadingAni.loop = true;
        loadingAni.play(40);

        // Preload game assets
        marsoniansGame.load.image('startButton', 'dist/img/start-btn.png', 500, 190);
        marsoniansGame.load.image('restartButton', 'dist/img/restart-btn.png', 720, 184);

        marsoniansGame.load.image('logo', 'dist/img/logo.png', 1082, 163);
        marsoniansGame.load.image('astronaughty', 'dist/img/astronaughty.png', 600, 961);

        marsoniansGame.load.image('bg-background', 'dist/img/background/background-alt.jpg', 2000, 1000);
        marsoniansGame.load.image('bg-landscape', 'dist/img/background/landscape.png', 2000, 1000);
        marsoniansGame.load.image('bg-moon', 'dist/img/background/moon.png', 809, 804);

        marsoniansGame.load.image('cursor', 'dist/img/cursor.png', 44, 44);

        marsoniansGame.load.atlasJSONHash('alien1', 'dist/img/alien-1/alien-1.png', 'dist/img/alien-1/alien-1.json');
        marsoniansGame.load.atlasJSONHash('alien1-explosion', 'dist/img/alien-1-expl/alien-1-expl.png', 'dist/img/alien-1-expl/alien-1-expl.json');
        marsoniansGame.load.atlasJSONHash('life-explosion', 'dist/img/life-expl/life-expl.png', 'dist/img/life-expl/life-expl.json');

        marsoniansGame.load.atlasJSONHash('game-over', 'dist/img/game-over/game-over.png', 'dist/img/game-over/game-over.json');

        marsoniansGame.load.spritesheet('life', 'dist/img/life.png', 76, 122);

        marsoniansGame.load.audio('laserSound', 'dist/audio/laser.mp3');
        marsoniansGame.load.audio('explosionSound', 'dist/audio/explosion.mp3');
        marsoniansGame.load.audio('extraLife', 'dist/audio/life.mp3');
        marsoniansGame.load.audio('hit', 'dist/audio/pain.mp3');
        marsoniansGame.load.audio('blop', 'dist/audio/blop.mp3');
        marsoniansGame.load.audio('win', 'dist/audio/win.mp3');
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
            marsonians.audio.button();
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


        // Add Cursor
        // marsonians.cursor.init();
    },

    update: function() {
        marsonians.gameBackground.updateBack();
        marsonians.gameBackground.updateAstronaughty();
    }
};
