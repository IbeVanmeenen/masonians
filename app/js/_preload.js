/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

marsonians.preloadState = () => {};

marsonians.preloadState.prototype = {

    preload: () => {
        const anataLogo = marsoniansGame.add.image(marsoniansGame.world.centerX, marsoniansGame.world.centerY, 'anata');
        anataLogo.scale.setTo(0.2, 0.2);
        anataLogo.anchor.setTo(0.5, 0.5);
        anataLogo.alpha = 0.3;

        marsoniansGame.load.atlasJSONHash('loading', '/assets/img/loading/loading.png', '/assets/img/loading/loading.json');
    },

    create: () => {
        marsoniansGame.state.start('menu', true, false);
    },

    update: () => {}
};
