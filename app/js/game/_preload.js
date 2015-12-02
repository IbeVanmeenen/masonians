/* ==========================================================================
   Marsonians - Preload
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.preload = function() {

    marsoniansGame.load.spritesheet('alien1', 'dist/img/alien-1.png', 470, 434);
    marsoniansGame.load.spritesheet('life', 'dist/img/life.png', 76, 122);
    marsoniansGame.load.image('background', 'dist/img/landscape.png', 1280, 800);

};
