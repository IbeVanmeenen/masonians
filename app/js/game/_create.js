/* ==========================================================================
   Marsonians - Create
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.create = function() {

    marsoniansGame.stage.backgroundColor = '#fef1e8';
    marsoniansGame.add.image(0, 0, 'background');

    marsoniansGame.world.setBounds(0, 0, 1280, 600);

    marsoniansGame.physics.startSystem(Phaser.Physics.ARCADE);
    marsoniansGame.physics.arcade.gravity.x = 0;
    marsoniansGame.physics.arcade.gravity.y = 10;

    marsonians.life.set();
    marsonians.alien.create();
};
