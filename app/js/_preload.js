/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.preloadState = function() {};

marsonians.preloadState.prototype = {

    preload: function() {
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
    },

    create: function() {
        console.log('preload');

        marsoniansGame.state.start('menu', true, false);
    },

    update: function() {

    }
};
