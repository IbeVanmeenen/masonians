/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.preloadState = function() {};

marsonians.preloadState.prototype = {

    preload: function() {
        anataLogo = marsoniansGame.add.image(marsoniansGame.world.centerX, marsoniansGame.world.centerY, 'anata');
        anataLogo.scale.setTo(0.2, 0.2);
        anataLogo.anchor.setTo(0.5, 0.5);
        anataLogo.alpha = 0.3;

        marsoniansGame.load.atlasJSONHash('loading', 'dist/img/loading/loading.png', 'dist/img/loading/loading.json');
    },

    create: function() {
        marsoniansGame.state.start('menu', true, false);
    },

    update: function() {}
};
