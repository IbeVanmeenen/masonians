/* ==========================================================================
   Marsonians - Create
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.create = function() {
    var screenShakeOffset = -(40 * globDevicePixelRatio);

    marsoniansGame.stage.backgroundColor = '#f7cfb5';
    marsoniansGame.add.image(screenShakeOffset, screenShakeOffset, 'background');

    marsoniansGame.world.setBounds(0, 0, globWidth, globHeight);

    marsoniansGame.physics.startSystem(Phaser.Physics.ARCADE);
    marsoniansGame.physics.arcade.gravity.x = 0;
    marsoniansGame.physics.arcade.gravity.y = 10;


    marsonians.life.set();
    marsonians.life.startLifeSystem();
    marsonians.shader.init();
    marsonians.audio.init();
    marsonians.alien.create();

    marsoniansGame.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    marsoniansGame.scale.setScreenSize(true);
};
