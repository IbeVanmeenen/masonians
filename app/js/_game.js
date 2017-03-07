/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.gameState = () => {};

marsonians.gameState.prototype = {
    preload: () => {

    },

    create: () => {
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


        // Pause
        marsonians.pause.init();


        // Test Dead
        // marsoniansGame.state.start('dead', true, false);
    },

    update: () => {
        marsonians.gameBackground.updateBack();
        marsonians.shakeWorld.update();

        if (marsoniansGame.input.mousePointer.isDown) {
            marsonians.shakeWorld.shake(3);
            marsonians.audio.laser();
        }
    }
};
