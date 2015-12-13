/* ==========================================================================
   Marsonians - Init
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.init = function() {

    marsonians.cursor();
    marsonians.alien();
    marsonians.difficulty();
    marsonians.life();
    marsonians.shader();
    marsonians.audio();
    marsonians.shakeWorld();
    marsonians.gameBackground();

    marsoniansGame.physics.startSystem(Phaser.Physics.ARCADE);

};
