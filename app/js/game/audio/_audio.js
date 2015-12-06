/* ==========================================================================
   Marsonians - Audio
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.audio = function() {

    var exports = this.audio;

    var laserSound, explosionSound;


    // Play laser
    exports.laser = function() {
        if (laserSound.isPlaying) {
            laserSound.play();
        } else {
            laserSound.restart();
        }
    };


    // Explosion
    exports.explosion = function() {
        explosionSound.play();
    };


    // General init
    exports.init = function() {
        laserSound = marsoniansGame.add.audio('laserSound');
        laserSound.volume = 0.3;

        explosionSound = marsoniansGame.add.audio('explosionSound');
        explosionSound.volume = 1;
    };
};
