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
        this.game.load.image('alien1', 'dist/img/alien-1.png');
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
        }
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
