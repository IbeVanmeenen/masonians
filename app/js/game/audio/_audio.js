/* ==========================================================================
   Marsonians - Audio
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.audio = function() {

    var exports = this.audio;

    var laserPause = false;


    // Laser
    exports.laser = function() {
        if (!laserPause) {
            laserPause = true;

            var laser = marsoniansGame.add.audio('laserSound');
            laser.play();
            laser.volume = 1;

            setTimeout(function () {
                laserPause = false;
            }, 200);
        }

    };


    // Extra Life
    exports.extraLife = function() {
        var extraLife = marsoniansGame.add.audio('extraLife');
        extraLife.play();
        extraLife.volume = .5;
    };


    // Button
    exports.button = function() {
        var button = marsoniansGame.add.audio('blop');
        button.play();
        button.volume = .3;
    };



    // Button
    exports.highscore = function() {
        var highscore = marsoniansGame.add.audio('win');
        highscore.play();
        highscore.volume = 1;
    };


    // Hit
    exports.hit = function() {
        var hit = marsoniansGame.add.audio('hit');
        hit.play();
        hit.volume = 1;
    };


    // Explosion
    exports.explosion = function() {
        var explosion = marsoniansGame.add.audio('explosionSound');
        explosion.play();
        explosion.volume = 0.2;
    };
};
