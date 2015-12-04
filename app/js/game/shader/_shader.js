/* ==========================================================================
   Marsonians - Shader
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.shader = function() {

    var exports = this.shader;

    var background = undefined,
        filter = undefined;


    // Init
    exports.init = function() {
        // filter = new Phaser.Filter(marsoniansGame, null, marsoniansGame.cache.getShader('ShaderBackground'));
        // filter.addToWorld(0, 0, 1280, 800);

        background = marsoniansGame.add.sprite(0, 0);
    	background.width = 1280;
    	background.height = 505;

    	filter = marsoniansGame.add.filter('BackgroundDust', 1280, 500);
    	filter.alpha = 0.0;
        filter.speed = { x: 0.4, y: 0.2 };

    	background.filters = [filter];
    };


    // Update
    exports.update = function() {
        if (filter) {
            filter.update();
        }
    };

};