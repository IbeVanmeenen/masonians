/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.preloadState = function() {};

marsonians.preloadState.prototype = {

    preload: function() {
        marsoniansGame.load.spritesheet('startButton', 'dist/img/start-btn.png', 500, 190);

        marsoniansGame.load.image('bg-background', 'dist/img/background/background.jpg', 2000, 1000);
        marsoniansGame.load.image('bg-landscape', 'dist/img/background/landscape.png', 2000, 1000);
        marsoniansGame.load.image('bg-moon', 'dist/img/background/moon.png', 809, 804);

        marsoniansGame.load.image('cursor', 'dist/img/cursor.png', 44, 44);

        marsoniansGame.load.atlasJSONHash('alien1', 'dist/img/alien-1/alien-1.png', 'dist/img/alien-1/alien-1.json');
        marsoniansGame.load.atlasJSONHash('explosion', 'dist/img/explosion/explosion.png', 'dist/img/explosion/explosion.json');

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
