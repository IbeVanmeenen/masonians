/* ==========================================================================
   Marsonians - Score
   ========================================================================== */

marsonians.score = function() {

    var exports = this.score;

    var currentScore = 0;

    var scoreTxt;


    var print = function(initialPrint, location) {
        scoreTxt = marsoniansGame.add.text(
            location.x,
            location.y,
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
        scoreTxt.padding.set(10, 0);
        scoreTxt.scale.setTo(0.5, 0.5);

        if (initialPrint) {
            scoreTxt.setText(currentScore);
        }
    };


    // Highscore
    var setAndPrintHighscore = function() {
        var highscore = localStorage.getItem('marsonians-high-score');
        var highscoreContent = 'Your Highscore';

        if (currentScore > highscore || !highscore) {
            highscore = currentScore;

            // Save localstorage
            localStorage.setItem('marsonians-high-score', highscore);

            // Play applause
            marsonians.audio.highscore();

            // Print new
            highscoreContent = 'NEW Highscore';
        }


        // PRINT
        var highscoreText = marsoniansGame.add.text(
            marsoniansGame.world.centerX,
            320,
            highscoreContent,
            {
                font: 'bangers',
                fontSize: 30,
                fontStyle: 'normal',
                fill: '#fff',
                align: 'center',
                letterSpacing: 200
            }
        );

        highscoreText.anchor.setTo(0.5, 0);
        highscoreText.padding.set(10, 0);
        highscoreText.scale.setTo(0.5, 0.5);

        var highscoreFinal = marsoniansGame.add.text(
            marsoniansGame.world.centerX,
            350,
            highscore,
            {
                font: 'bangers',
                fontSize: 80,
                fontStyle: 'normal',
                fill: '#fff',
                align: 'center',
                letterSpacing: 200
            }
        );

        highscoreFinal.setShadow(0, 5, '#fe9045', 0);
        highscoreFinal.anchor.setTo(0.5, 0);
        highscoreFinal.padding.set(10, 0);
        highscoreFinal.scale.setTo(0.5, 0.5);
    };


    // Add
    exports.add = function() {
        currentScore += 100;

        scoreTxt.setText(currentScore);
    };


    // Print Final
    exports.printFinal = function() {
        // Your score
        var yourScoreText = marsoniansGame.add.text(
            marsoniansGame.world.centerX,
            220,
            'Your Score',
            {
                font: 'bangers',
                fontSize: 30,
                fontStyle: 'normal',
                fill: '#fff',
                align: 'center',
                letterSpacing: 200
            }
        );

        yourScoreText.anchor.setTo(0.5, 0);
        yourScoreText.padding.set(10, 0);
        yourScoreText.scale.setTo(0.5, 0.5);


        // Score
        var location = {
            x: marsoniansGame.world.centerX,
            y: 250
        };

        print(true, location);


        // Highscore
        setAndPrintHighscore();
    };


    // Init
    exports.init = function() {
        currentScore = 0;

        var location = {
            x: marsoniansGame.world.centerX,
            y: 35
        };

        print(false, location);
    };
};
