/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.gameState = function() {};

marsonians.gameState.prototype = {
    preload: function() {

    },

    create: function() {
        console.log('game');

        // Start Physics
        marsoniansGame.physics.startSystem(Phaser.Physics.ARCADE);

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
        marsonians.alien.create();
        marsonians.score.init();
    },

    update: function() {
        // marsoniansGame.physics.arcade.collide(globAliens);
        marsonians.shakeWorld.update();

        if (marsoniansGame.input.mousePointer.isDown) {
            marsonians.shakeWorld.shake(3);
            marsonians.audio.laser();
        }
    }
};
