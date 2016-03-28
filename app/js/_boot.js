/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.bootState = function() {};

marsonians.bootState.prototype = {
    preload: function() {
        // load assets for the loading screen
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

        console.log('boot');

        marsoniansGame.state.start('preload');
    },

    update: function() {

    }
};
