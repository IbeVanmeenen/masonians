/* ==========================================================================
   Marsonians - Alien
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.life = function() {

    var exports = this.life;

    var lifeCountItems,
        lifeCreateTimeOut;


    // Update text
    var updateText = function() {
        lifeText.text = globLifeCount;
    };


    // Create life Item
    var createLifeItem = function() {
        var lifeItem, scaleX, scaleY,
            randomizer = Math.random();

        lifeItem = marsoniansGame.add.sprite(marsoniansGame.world.randomX, marsoniansGame.world.randomY, 'life');

        marsoniansGame.physics.arcade.enable(lifeItem);

        lifeItem.body.collideWorldBounds = true;
        lifeItem.body.bounce.setTo(0.8, 0.8);
        lifeItem.body.velocity.setTo(20 + randomizer * 100, 30 + randomizer * 100);

        lifeItem.hitArea = new Phaser.Rectangle(0, 0, 76, 122);

        if (randomizer > 0.5) {
            scaleX = 0.7;
            scaleY = 0.7;
        } else {
            scaleX = 0.5;
            scaleY = 0.5;
        }

        lifeItem.scale.setTo(0.4 * scaleX, 0.4 * scaleY);

        lifeItem.inputEnabled = true;
        lifeItem.events.onInputDown.add(addLife, this);
    };


    // Add life count item
    var addLifeCountItem = function(i) {
        var lifeCountItem = lifeCountItems.create(20 * i, 20, 'life');

        lifeCountItem.scale.setTo(0.4, 0.4);
    };


    // Add To life
    var addLife = function(lifeItem) {
        // Play sound
        marsonians.audio.extraLife();

        // Add life count
        globLifeCount += 1;
        addLifeCountItem(globLifeCount);

        // Destroy life item
        lifeItem.destroy();

        // Increment difficulty
        marsonians.difficulty.increment();

        // Create a new one
        lifeCreateTimeOut = setTimeout(function() {
            window.requestAnimationFrame(createLifeItem);
        }, 3000);
    };


    // Set Initial life
    exports.set = function() {
        lifeCountItems = marsoniansGame.add.group();

        for (var i = 0; i < globLifeCount; i++) {
            addLifeCountItem(i + 1);
        }
    };


    // Remove Life
    exports.remove = function() {
        // Play sound
        marsonians.audio.hit();

        // Shake world
        marsonians.shakeWorld.shake(40);

        // Remove life
        globLifeCount -= 1;

        var lastLife = lifeCountItems.getTop();
        lastLife.destroy();
    };


    // Create
    exports.startLifeSystem = function() {
        lifeCreateTimeOut = setTimeout(function() {
            createLifeItem();
        }, 3000);
    };
};
