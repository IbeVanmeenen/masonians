/* ==========================================================================
   Marsonians - Background
   ========================================================================== */

marsonians.gameBackground = function() {

    var exports = this.gameBackground;

    var screenShakeOffset = -40;
    var currentRotation = 0;

    var bg, moon, landscape, astro;

    // Set back
    exports.setBack = function() {
        marsoniansGame.stage.backgroundColor = '#ff7b1f';

        bg = marsoniansGame.add.image(screenShakeOffset, (screenShakeOffset + (globHeight - (1000 + (screenShakeOffset * 2)))), 'bg-background');
        moon = marsoniansGame.add.image(screenShakeOffset + 360, (globHeight - 160), 'bg-moon');
        landscape = marsoniansGame.add.image(screenShakeOffset, (screenShakeOffset + (globHeight - (1000 + (screenShakeOffset * 2)))), 'bg-landscape');

        moon.anchor.setTo(0.5, 0.5);
        moon.angle = currentRotation;
    };


    // Set astronaughty
    exports.setAstronaugthy = function() {
        astro = marsoniansGame.add.image(marsoniansGame.world.centerX / 4, marsoniansGame.world.centerY, 'astronaughty');
        astro.scale.setTo(0.2, 0.2);
        astro.anchor.setTo(0.5, 0.5);
    };


    // Update Moon
    exports.updateBack = function() {
        currentRotation += 0.005;
        moon.angle = currentRotation;
    };


    // Update astronaughty
    exports.updateAstronaughty = function() {
        astro.angle += 0.05;
        astro.x += 0.1;
    };
};
