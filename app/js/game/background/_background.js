/* ==========================================================================
   Marsonians - Background
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.gameBackground = function() {

    var exports = this.gameBackground;

    var screenShakeOffset = -(40 * globDevicePixelRatio),
        frontBg;

    var frontLeft = globWidth - 306,
        frontTop = globHeight - 128;


    // Set back
    exports.setBack = function() {
        marsoniansGame.stage.backgroundColor = '#f7cfb5';
        marsoniansGame.add.image(screenShakeOffset, screenShakeOffset, 'background');
    };


    // Set front
    exports.setFront = function() {
        frontBg = marsoniansGame.add.image(frontLeft, frontTop, 'background-front');
    };


    // Update front
    exports.updateFront = function() {
        frontBg.x = frontLeft - (marsoniansGame.input.x * 0.05);
    };
};
