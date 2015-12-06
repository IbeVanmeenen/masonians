/* ==========================================================================
   Marsonians - Preload
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.preload = function() {
    marsoniansGame.load.image('background', 'dist/img/landscape.png', 1280, 800);

    marsoniansGame.load.spritesheet('alien1', 'dist/img/alien-1.png', 470, 434);
    marsoniansGame.load.spritesheet('life', 'dist/img/life.png', 76, 122);

    marsoniansGame.load.script('filter', 'dist/filters/background.js');

    marsoniansGame.load.audio('laserSound', 'dist/audio/laser.mp3');
    marsoniansGame.load.audio('explosionSound', 'dist/audio/explosion--loud.mp3');
};
