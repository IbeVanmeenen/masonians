/* ==========================================================================
   Marsonians - Background
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.gameBackground = function() {

    var exports = this.gameBackground;

    var screenShakeOffset = -(40 * globDevicePixelRatio);


    // Set back
    exports.setBack = function() {
        marsoniansGame.stage.backgroundColor = '#f7cfb5';

        var bg = marsoniansGame.add.image(screenShakeOffset, (screenShakeOffset + (globHeight - (800 + (screenShakeOffset * 2)))), 'background');

        // if (globWidth > 2000 + screenShakeOffset) {
        //     var bg2 = marsoniansGame.add.image(2000 + screenShakeOffset, (screenShakeOffset + (globHeight - 800)), 'background');
        //     bg2.anchor.setTo(1, 0);
        //     bg2.scale.x *= -1;
        // }
    };
};
