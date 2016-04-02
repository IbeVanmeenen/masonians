/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.preloadState = function() {};

marsonians.preloadState.prototype = {

    preload: function() {
        marsoniansGame.load.spritesheet('startButton', 'dist/img/start-btn.png', 500, 190);

        marsoniansGame.load.image('background', 'dist/img/landscape--wide.jpg', 1280, 800);
        marsoniansGame.load.image('background-front', 'dist/img/landscape--front.png', 315, 122);

        marsoniansGame.load.image('cursor', 'dist/img/cursor.png', 44, 44);

        marsoniansGame.load.spritesheet('alien1', 'dist/img/alien-1.png', 470, 434);
        marsoniansGame.load.spritesheet('life', 'dist/img/life.png', 76, 122);

        marsoniansGame.load.audio('laserSound', 'dist/audio/laser.mp3');
        marsoniansGame.load.audio('explosionSound', 'dist/audio/explosion.mp3');
        marsoniansGame.load.audio('extraLife', 'dist/audio/life.mp3');
        marsoniansGame.load.audio('hit', 'dist/audio/pain.mp3');
    },

    create: function() {
        console.log('preload');

        marsoniansGame.state.start('menu');
    },

    update: function() {

    }
};
