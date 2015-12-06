/* ==========================================================================
   Marsonians - Init
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.init = function() {

    marsonians.alien();
    marsonians.difficulty();
    marsonians.life();
    marsonians.cursor();
    marsonians.shader();
    marsonians.audio();
    marsonians.shakeWorld();

    marsoniansGame.physics.startSystem(Phaser.Physics.ARCADE);

};
