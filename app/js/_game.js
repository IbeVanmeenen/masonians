/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

var MarsoniansGame = (function() {

    function MarsoniansGame(phaserGame) {
        this.game = phaserGame;
        this.alienCount = 2;

        this.aliens = undefined;
    }




    MarsoniansGame.prototype.init = function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
    };




    MarsoniansGame.prototype.preload = function() {
        this.game.load.spritesheet('alien1', 'dist/img/alien-hasStages.png', 100, 100);
    };




    MarsoniansGame.prototype.createAliens = function() {

        this.aliens = this.game.add.group();
        this.aliens.enableBody = true;

        for (var i = 0; i < this.alienCount + 1; i++) {
            var s = this.aliens.create(this.game.world.randomX, this.game.world.randomY, 'alien1');
            s.name = 'alien' + s;
            s.body.collideWorldBounds = true;
            s.body.bounce.setTo(0.8, 0.8);
            s.body.velocity.setTo(20 + Math.random() * 40, 30 + Math.random() * 40);
            s.hitArea = new Phaser.Rectangle(0, 0, 100, 100);
            console.log(s.frame);

            this.updateAlien(s);
        }
    };




    MarsoniansGame.prototype.updateAlien = function(alien) {
        // http://phaser.io/examples/v2/animation/two-frame-test
        // http://phaser.io/docs/2.4.4/Phaser.Animation.html

        var anim = alien.animations.add('shootAni');

        anim.loop = true;
        anim.onLoop.add(function() {
            console.log(this + 'has shot, life -1');
        });
        anim.play(0.2);
    };



    MarsoniansGame.prototype.destroyAlien = function(alien) {
        // Splice from array

        // Destroy sprite
        alien.destroy();
    };




    MarsoniansGame.prototype.create = function() {
        this.game.stage.backgroundColor = '#111';

        this.game.world.setBounds(0, 0, 800, 600);

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.x = 0;
        this.game.physics.arcade.gravity.y = 0.2;

        this.createAliens();
    };




    MarsoniansGame.prototype.update = function() {
        this.game.physics.arcade.collide(this.aliens);
    };


    return MarsoniansGame;
})();
