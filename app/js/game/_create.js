/* ==========================================================================
   Marsonians - Create
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.create = function() {
    marsoniansGame.world.setBounds(0, 0, globWidth, globHeight);

    marsoniansGame.physics.startSystem(Phaser.Physics.ARCADE);
    marsoniansGame.physics.arcade.gravity.x = 0;
    marsoniansGame.physics.arcade.gravity.y = 10;

    marsonians.gameBackground.setBack();

    marsonians.life.set();
    marsonians.life.startLifeSystem();
    marsonians.shader.init();
    marsonians.audio.init();
    marsonians.alien.create();

    marsonians.gameBackground.setFront();

    marsoniansGame.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    marsoniansGame.scale.setScreenSize(true);
};
