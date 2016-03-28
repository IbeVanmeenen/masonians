/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.preloadState = function() {};

marsonians.preloadState.prototype = {

    preload: function() {
        marsoniansGame.load.image('background', 'dist/img/landscape--wide.jpg', 1280, 800);
        marsoniansGame.load.image('background-front', 'dist/img/landscape--front.png', 315, 122);

        marsoniansGame.load.image('crosshair', 'dist/img/crosshair.png', 74, 72);

        marsoniansGame.load.spritesheet('alien1', 'dist/img/alien-1.png', 470, 434);
        marsoniansGame.load.spritesheet('life', 'dist/img/life.png', 76, 122);

        marsoniansGame.load.script('filter', 'dist/filters/background.js');

        marsoniansGame.load.audio('laserSound', 'dist/audio/laser.mp3');
        marsoniansGame.load.audio('explosionSound', 'dist/audio/explosion.mp3');
    },

    create: function() {
        console.log('preload');

        marsoniansGame.state.start('game');
    },

    update: function() {

    }
};
