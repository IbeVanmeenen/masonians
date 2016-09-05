/* ==========================================================================
   Marsonians - Background
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.gameBackground = function() {

    var exports = this.gameBackground;

    var screenShakeOffset = -(40 * globDevicePixelRatio);

    var bg, moon, landscape;

    // Set back
    exports.setBack = function() {
        marsoniansGame.stage.backgroundColor = '#ff7b1f';

        bg = marsoniansGame.add.image(screenShakeOffset, (screenShakeOffset + (globHeight - (1000 + (screenShakeOffset * 2)))), 'bg-background');
        moon = marsoniansGame.add.image(screenShakeOffset + 360, (globHeight - 160), 'bg-moon');
        landscape = marsoniansGame.add.image(screenShakeOffset, (screenShakeOffset + (globHeight - (1000 + (screenShakeOffset * 2)))), 'bg-landscape');

        moon.anchor.setTo(0.5, 0.5);
    };

    // update
    exports.update = function() {
        moon.angle += 0.005;
    };
};
