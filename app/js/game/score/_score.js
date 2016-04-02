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
                font: '2vw bangers',
                fill: '#000',
                align: 'center'
            }
        );
        scoreTxt.anchor.setTo(0.5, 0);
    };
};
