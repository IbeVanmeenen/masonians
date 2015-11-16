/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

var MarsoniansGame = (function() {

    function MarsoniansGame(phaserGame) {
        this.game = phaserGame;
    }


    MarsoniansGame.prototype.init = function() {

    };


    MarsoniansGame.prototype.preload = function() {
        this.game.load.image('alien1', 'dist/img/alien-1.png');
    };


    MarsoniansGame.prototype.create = function() {
        this.game.stage.backgroundColor = '#111';

        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 0;

        var sprite;

        sprite = this.game.add.sprite(100, 100, 'alien1');
        this.game.physics.arcade.enable(sprite);

        sprite.body.velocity.set(100, 0);
        //sprite.body.bounce.set(1);
        sprite.body.collideWorldBounds = true;
    };


    MarsoniansGame.prototype.update = function() {

        // Init
        var init = function() {

        }();
    };


    return MarsoniansGame;
})();
