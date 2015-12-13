/* ==========================================================================
   Marsonians - Create
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.create = function() {

    // Bounds
    marsoniansGame.world.setBounds(0, 0, globWidth, globHeight);


    // Physics
    marsoniansGame.physics.startSystem(Phaser.Physics.ARCADE);
    marsoniansGame.physics.arcade.gravity.x = 0;
    marsoniansGame.physics.arcade.gravity.y = 10;


    // Create game
    marsonians.gameBackground.setBack();
    marsonians.life.set();
    marsonians.life.startLifeSystem();
    marsonians.shader.init();
    marsonians.audio.init();
    marsonians.alien.create();
    marsonians.gameBackground.setFront();
    marsonians.cursor.init();
};
