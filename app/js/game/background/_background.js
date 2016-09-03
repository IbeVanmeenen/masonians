/* ==========================================================================
   Marsonians - Background
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.gameBackground = function() {

    var exports = this.gameBackground;

    var screenShakeOffset = -(40 * globDevicePixelRatio);


    // Set back
    exports.setBack = function() {
        marsoniansGame.stage.backgroundColor = '#ff7b1f';

        var bg = marsoniansGame.add.image(screenShakeOffset, (screenShakeOffset + (globHeight - (800 + (screenShakeOffset * 2)))), 'background');
    };
};
