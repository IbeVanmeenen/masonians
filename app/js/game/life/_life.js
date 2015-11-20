/* ==========================================================================
   Marsonians - Alien
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.life = function() {

    var exports = this.life;

    var lifeText;


    // Update text
    var updateText = function() {
        lifeText.text = globLifeCount;
    };


    // Set
    exports.set = function() {
        lifeText = marsoniansGame.add.text(marsoniansGame.world.centerX, 20, globLifeCount, {
            font: '24px Helvetica',
            fill: '#fff',
            align: 'center'
        });
    };


    // Remove
    exports.remove = function() {
        globLifeCount -= 1;

        updateText();
    };


    // Add
    exports.add = function() {
        globLifeCount += 1;

        updateText();
    };
};
