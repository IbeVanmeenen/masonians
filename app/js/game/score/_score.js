/* ==========================================================================
   Marsonians - Score
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.score = function() {

    var exports = this.score;

    var currentScore = 0;

    var scoreTxt;


    // Add
    exports.add = function() {
        currentScore += 100;

        scoreTxt.setText(currentScore);
    };


    exports.init = function() {
        scoreTxt = marsoniansGame.add.text(
            marsoniansGame.world.centerX,
            35,
            '',
            {
                font: 'bangers',
                fontSize: 80,
                fontStyle: 'normal',
                fill: '#fff',
                align: 'center',
                letterSpacing: 200
            }
        );
        scoreTxt.setShadow(0, 5, '#fe9045', 0);
        scoreTxt.anchor.setTo(0.5, 0);
        scoreTxt.padding.set(40, 0);
        scoreTxt.scale.setTo(0.5, 0.5);
    };
};
