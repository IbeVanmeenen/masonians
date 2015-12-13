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

    marsonians.cursor.init();


    if (!marsoniansGame.device.desktop) {
        marsoniansGame.scale.forceLandscape = true;
    } else {
        marsoniansGame.scale.maxWidth = 667;
        marsoniansGame.scale.maxHeight = 375;
    }

    marsoniansGame.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    marsoniansGame.scale.pageAlignHorizontally = true;
    marsoniansGame.scale.setScreenSize(true);
};
