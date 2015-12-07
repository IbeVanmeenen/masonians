/* ==========================================================================
   Marsonians - Audio
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.audio = function() {

    var exports = this.audio;

    var laserSound, explosionSound;


    // Play laser
    exports.laser = function() {
        // if (laserSound.isPlaying) {
        //     laserSound.play();
        //     laserSound.volume = 0.1;
        // } else {
        //     laserSound.restart();
        // }
    };


    // Explosion
    exports.explosion = function() {
        // explosionSound.play();
    };


    // General init
    exports.init = function() {
        // laserSound = marsoniansGame.add.audio('laserSound');
        // explosionSound = marsoniansGame.add.audio('explosionSound');
    };
};
