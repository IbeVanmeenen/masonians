/* ==========================================================================
   Marsonians - Background
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.gameBackground = function() {

    var exports = this.gameBackground;

    var screenShakeOffset = -(40 * globDevicePixelRatio),
        frontBg;


    // Set back
    exports.setBack = function() {
        marsoniansGame.stage.backgroundColor = '#f7cfb5';
        marsoniansGame.add.image(screenShakeOffset, screenShakeOffset, 'background');
    };


    // Set front
    exports.setFront = function() {
        frontBg = marsoniansGame.add.image((globWidth - 306), (globHeight - 128), 'background-front');
    };


    // Update front
    exports.updateFront = function() {
        frontBg.x = game.input.mousePointer.x;
    };
};
