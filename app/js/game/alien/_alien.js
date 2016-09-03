/* ==========================================================================
   Marsonians - Alien
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.alien = function() {

    var exports = this.alien;


    var destroy = function(alien, front) {
        // Play explosion
        marsonians.audio.explosion();

        // Add explosion animation
        var explosion;
        if (front) {
            exlosion = globAliensFront.create(alien.position.x, alien.position.y, 'explosion');
        } else {
            exlosion = globAliensBack.create(alien.position.x, alien.position.y, 'explosion');
        }
        exlosion.scale.setTo(alien.scale.x, alien.scale.y);
        exlosion.body.velocity.setTo(10, 10);

        var exlosionAnim = exlosion.animations.add('explosionAni', Phaser.Animation.generateFrameNames('explosion_', 0, 29, '', 5));
        exlosionAnim.loop = false;
        exlosionAnim.onComplete.add(function() {
            exlosion.destroy();
        });

        exlosionAnim.play(35);

        // Destroy alien
        alien.destroy();

        // Add score
        marsonians.score.add();

        // Increment difficulty
        marsonians.difficulty.increment();

        // Create a new one
        createOne();
    };


    var createOne = function() {
        var alien, front, scaleX, scaleY,
            randomizer = Math.random();

        if (randomizer > 0.5) {
            front = true;
            alien = globAliensFront.create(marsoniansGame.world.randomX, 0, 'alien1');
            scaleX = 0.6;
            scaleY = 0.6;
        } else {
            front = false;
            alien = globAliensBack.create(marsoniansGame.world.randomX, 0, 'alien1');
            scaleX = 0.3;
            scaleY = 0.3;
        }

        alien.name = 'alien' + alien;

        alien.body.collideWorldBounds = true;
        alien.body.bounce.setTo(0.8, 0.8);
        alien.body.velocity.setTo(20 + randomizer * 100, 30 + randomizer * 100);

        var hitRect = new Phaser.Rectangle(0, 0, 300, 300)
        alien.hitArea = hitRect;

        alien.scale.setTo(scaleX, scaleY);

        alien.inputEnabled = true;
        alien.events.onInputDown.add(destroy, this, front);

        var anim = alien.animations.add('shootAni', Phaser.Animation.generateFrameNames('alien_', 0, 89, '', 5));
        anim.loop = true;
        anim.onLoop.add(function() {
            marsonians.life.remove();
        });

        anim.play(globShootSpeed + 15);
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
