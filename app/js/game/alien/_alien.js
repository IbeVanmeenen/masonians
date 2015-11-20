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
            console.log(this + 'has shot, life -1');
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
        var s = globAliens.create(marsoniansGame.world.randomX, marsoniansGame.world.randomY, 'alien1');

        s.name = 'alien' + s;

        s.body.collideWorldBounds = true;
        s.body.bounce.setTo(0.8, 0.8);
        s.body.velocity.setTo(20 + Math.random() * 40, 30 + Math.random() * 40);

        s.hitArea = new Phaser.Rectangle(0, 0, 100, 100);

        s.inputEnabled = true;
        s.events.onInputDown.add(destroy, this);

        animate(s);
    };


    exports.create = function() {
        globAliens = marsoniansGame.add.group();
        globAliens.enableBody = true;

        for (var i = 0; i < globAlienCount; i++) {
            createOne();
        }
    };

};
