/* ==========================================================================
   Marsonians - Create
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.create = function() {

    marsoniansGame.stage.backgroundColor = '#111';

    marsoniansGame.world.setBounds(0, 0, 800, 600);

    marsoniansGame.physics.startSystem(Phaser.Physics.ARCADE);
    marsoniansGame.physics.arcade.gravity.x = 0;
    marsoniansGame.physics.arcade.gravity.y = 0.2;

    marsonians.alien.createAliens();

};
