/* ==========================================================================
   Marsonians - Alien
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.alien = function() {

    var exports = this.alien;


    var destroy = function(alien) {
        // Play explosion
        marsonians.audio.explosion();

        // Destroy alien
        alien.destroy();

        // Increment difficulty
        marsonians.difficulty.increment();

        // Create a new one
        createOne();
    };


    var createOne = function() {
        var alien, scaleX, scaleY,
            randomizer = Math.random();

        if (randomizer > 0.5) {
            alien = globAliensFront.create(marsoniansGame.world.randomX, 0, 'alien1');
            scaleX = 0.6;
            scaleY = 0.6;
        } else {
            alien = globAliensBack.create(marsoniansGame.world.randomX, 0, 'alien1');
            scaleX = 0.2;
            scaleY = 0.2;
        }

        alien.name = 'alien' + alien;

        alien.body.collideWorldBounds = true;
        alien.body.bounce.setTo(0.8, 0.8);
        alien.body.velocity.setTo(20 + randomizer * 100, 30 + randomizer * 100);

        alien.hitArea = new Phaser.Rectangle(0, 0, 470, 434);

        alien.scale.setTo(scaleX, scaleY);

        alien.inputEnabled = true;
        alien.events.onInputDown.add(destroy, this);

        var anim = alien.animations.add('shootAni');
        anim.loop = true;
        anim.onLoop.add(function() {
            marsonians.life.remove();
        });

        anim.play(globShootSpeed);
    };


    exports.create = function() {
        globAliensBack = marsoniansGame.add.group();
        globAliensFront = marsoniansGame.add.group();

        globAliensBack.enableBody = true;
        globAliensFront.enableBody = true;

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
