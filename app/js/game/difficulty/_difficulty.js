/* ==========================================================================
   Marsonians - Alien
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.difficulty = function() {

    var exports = this.difficulty;

    exports.increment = function() {
        if (globShootSpeed > 1) {
            globShootSpeed += 0.01;
        } else if (globShootSpeed > 1.5) {
            globShootSpeed += 0.005;
        } else {
            globShootSpeed += 0.05;
        }
    };
};
