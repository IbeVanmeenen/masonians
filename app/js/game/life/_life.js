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

        var lifeItem = marsoniansGame.add.sprite(marsoniansGame.world.randomX, marsoniansGame.world.randomY, 'life');

        marsoniansGame.physics.arcade.enable(lifeItem);

        lifeItem.body.collideWorldBounds = true;
        lifeItem.body.bounce.setTo(0.8, 0.8);
        lifeItem.body.velocity.setTo(20 + Math.random() * 100, 30 + Math.random() * 100);

        lifeItem.hitArea = new Phaser.Rectangle(0, 0, 76, 122);

        var scaleModifier = Math.random(),
            scaleX = 1 * scaleModifier,
            scaleY = 1 * scaleModifier;

        if (scaleX < 0.2 || scaleY < 0.2) {
            scaleX = 0.2;
            scaleY = 0.2;
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
        // Add life count
        globLifeCount += 1;
        addLifeCountItem(globLifeCount);

        // Destroy life item
        lifeItem.destroy();

        // Increment difficulty
        marsonians.difficulty.increment();

        // Create a new one
        lifeCreateTimeOut = setTimeout(function() {
            createLifeItem();
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
        globLifeCount -= 1;
        console.log('remove life');
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
