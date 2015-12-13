/* ==========================================================================
   Marsonians - Background
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.gameBackground = function() {

    var exports = this.gameBackground;

    var screenShakeOffset = -(40 * globDevicePixelRatio),
        frontBg1, frontBg2;

    var frontLeft1 = globWidth - 306,
        frontTop1 = globHeight - 122 + 10,
        frontLeft2 = globWidth / 5,
        frontTop2 = globHeight - 122 + 10;


    // Set back
    exports.setBack = function() {
        marsoniansGame.stage.backgroundColor = '#f7cfb5';
        marsoniansGame.add.image(screenShakeOffset, screenShakeOffset, 'background');
    };


    // Set front
    exports.setFront = function() {
        frontBg1 = marsoniansGame.add.image(frontLeft1, frontTop1, 'background-front');
        frontBg2 = marsoniansGame.add.image(frontLeft2, frontTop2, 'background-front');
    };


    // Update front
    exports.updateFront = function() {
        frontBg1.x = frontLeft - (marsoniansGame.input.x * 0.05);
    };
};
