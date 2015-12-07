/* ==========================================================================
   Marsonians - Update
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.update = function() {

    marsoniansGame.physics.arcade.collide(globAliens);
    marsonians.shader.update();
    marsonians.shakeWorld.update();
    // marsonians.gameBackground.updateFront();

    if (marsoniansGame.input.mousePointer.isDown) {
        marsonians.shakeWorld.shake(3);
        marsonians.audio.laser();
    }
};
