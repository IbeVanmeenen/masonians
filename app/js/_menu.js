/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.menuState = () => {};

marsonians.menuState.prototype = {
    preload: () => {
        // Add loading animation
        var loadingSprite = marsoniansGame.add.sprite(marsoniansGame.world.centerX - 100, marsoniansGame.world.centerY - 100, 'loading'),
            loadingAni = loadingSprite.animations.add('loadingAni1', Phaser.Animation.generateFrameNames('loading_', 0, 80, '', 5));

        loadingAni.loop = true;
        loadingAni.play(40);

        // Preload game assets
        marsoniansGame.load.image('startButton', '/assets/img/start-btn.png', 500, 190);
        marsoniansGame.load.image('restartButton', '/assets/img/restart-btn.png', 720, 184);

        marsoniansGame.load.image('logo', '/assets/img/logo.png', 1082, 163);
        marsoniansGame.load.image('astronaughty', '/assets/img/astronaughty.png', 600, 961);

        marsoniansGame.load.image('bg-background', '/assets/img/background/background-alt.jpg', 2000, 1000);
        marsoniansGame.load.image('bg-landscape', '/assets/img/background/landscape.png', 2000, 1000);
        marsoniansGame.load.image('bg-moon', '/assets/img/background/moon.png', 809, 804);

        marsoniansGame.load.atlasJSONHash('alien1', '/assets/img/alien-1/alien-1.png', '/assets/img/alien-1/alien-1.json');
        marsoniansGame.load.atlasJSONHash('alien1-explosion', '/assets/img/alien-1-expl/alien-1-expl.png', '/assets/img/alien-1-expl/alien-1-expl.json');
        marsoniansGame.load.atlasJSONHash('life-explosion', '/assets/img/life-expl/life-expl.png', '/assets/img/life-expl/life-expl.json');

        marsoniansGame.load.atlasJSONHash('game-over', '/assets/img/game-over/game-over.png', '/assets/img/game-over/game-over.json');

        marsoniansGame.load.spritesheet('life', '/assets/img/life.png', 76, 122);

        marsoniansGame.load.audio('laserSound', '/assets/audio/laser.mp3');
        marsoniansGame.load.audio('explosionSound', '/assets/audio/explosion.mp3');
        marsoniansGame.load.audio('extraLife', '/assets/audio/life.mp3');
        marsoniansGame.load.audio('hit', '/assets/audio/pain.mp3');
        marsoniansGame.load.audio('blop', '/assets/audio/blop.mp3');
        marsoniansGame.load.audio('win', '/assets/audio/win.mp3');
    },

    create: () => {
        // Helper
        const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth, maxHeight) => {
            const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

            return {
                width: srcWidth * ratio,
                height: srcHeight * ratio
            };
        };


        // background
        marsonians.gameBackground.setBack();
        marsonians.gameBackground.setAstronaugthy();


        // Logo
        const logo = marsoniansGame.add.image(marsoniansGame.world.centerX, marsoniansGame.world.centerY / 1.5, 'logo');
        let logoMaxWidth = globWidth / 1.1;
        let logoMaxHeigth = 184;

        if (globWidth > 500) {
            logoMaxWidth = globWidth / 1.5;
        }

        const logoSizes = calculateAspectRatioFit(1082, 163, logoMaxWidth, logoMaxHeigth);

        logo.anchor.setTo(0.5, 0.5);
        logo.width = logoSizes.width;
        logo.height = logoSizes.height;


        // Start game to game
        const startGame = () => {
            marsonians.audio.button();
            marsoniansGame.state.start('game', true, false);
            gameCanvas.classList.add('game--active');
        };

        const startButton = marsoniansGame.add.button(marsoniansGame.world.centerX, marsoniansGame.world.centerY * 1.2, 'startButton', startGame, this, 2, 1, 0);
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
    },

    update: () => {
        marsonians.gameBackground.updateBack();
        marsonians.gameBackground.updateAstronaughty();
    }
};
