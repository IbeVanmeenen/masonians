/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.bootState = function() {};

marsonians.bootState.prototype = {
    preload: function() {
        // Set boot bg
        marsoniansGame.stage.backgroundColor = '#fb944c';

        // Load
        marsoniansGame.load.image('anata', 'dist/img/anata.png', 343, 503);
    },

    create: function() {
        // Scale
        if (!marsoniansGame.device.desktop) {
            marsoniansGame.scale.forceLandscape = true;
        } else {
            marsoniansGame.scale.maxWidth = 1334;
            marsoniansGame.scale.maxHeight = 750;
        }

        marsoniansGame.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        marsoniansGame.scale.pageAlignHorizontally = true;

        // Start preloading
        marsoniansGame.state.start('preload');
    },

    update: function() {}
};
