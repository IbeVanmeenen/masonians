/* ==========================================================================
   Marsonians - Alien
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.alien = function() {

    var exports = this.alien;


    var animate = function(alien) {
        // http://phaser.io/examples/v2/animation/two-frame-test
        // http://phaser.io/docs/2.4.4/Phaser.Animation.html

        var anim = alien.animations.add('shootAni');

        anim.loop = true;
        anim.onLoop.add(function() {
            marsonians.life.remove();
        });

        anim.play(globShootSpeed);
    };


    var destroy = function(alien) {
        // Destroy alien
        alien.destroy();

        // Increment difficulty
        marsonians.difficulty.increment();

        // Create a new one
        createOne();
    };


    var createOne = function() {
        var alien = globAliens.create(marsoniansGame.world.randomX, 0, 'alien1');

        alien.name = 'alien' + alien;

        alien.body.collideWorldBounds = true;
        alien.body.bounce.setTo(0.8, 0.8);
        alien.body.velocity.setTo(20 + Math.random() * 100, 30 + Math.random() * 100);

        alien.hitArea = new Phaser.Rectangle(0, 0, 470, 434);

        var scaleModifier = Math.random(),
            scaleX = 1 * scaleModifier,
            scaleY = 1 * scaleModifier;

        if (scaleX < 0.3 || scaleY < 0.3) {
            scaleX = 0.3;
            scaleY = 0.3;
        }

        alien.scale.setTo(0.4 * scaleX, 0.4 * scaleY);

        alien.inputEnabled = true;
        alien.events.onInputDown.add(destroy, this);

        animate(alien);
    };


    exports.create = function() {
        globAliens = marsoniansGame.add.group();
        globAliens.enableBody = true;

        for (var i = 0; i < globAlienCount; i++) {
            createOne();
        }

        var timeOutSpeed = 10000;

        var createExtra = function() {
            setTimeout(function () {
                createOne();

                timeOutSpeed += 5000;

                createExtra();
            }, timeOutSpeed);
        };

        createExtra();
    };

};
