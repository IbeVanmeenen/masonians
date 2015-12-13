/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.game = function() {
    // Set globals
    window.gameCanvas = document.getElementById('game-container');
    window.globDevicePixelRatio = window.devicePixelRatio;
    window.globWidth = window.innerWidth * globDevicePixelRatio;
    window.globHeight = window.innerHeight * globDevicePixelRatio;
    window.globLifeCount = 3;
    window.globAlienCount = 3;
    window.globShootSpeed = 3;
    window.globAliens = undefined;

    if (window.globWidth > 2000) {
        globWidth = window.innerWidth;
        globHeight = window.innerHeight;
    }


    // Start Phaser Game
    window.marsoniansGame = new Phaser.Game(
        globWidth, globHeight,
        Phaser.AUTO,
        'game-container'
    );


    // Add states
    marsoniansGame.state.add('boot', marsonians.bootState);
    marsoniansGame.state.add('preload', marsonians.preloadState);
    marsoniansGame.state.add('menu', marsonians.bootState);
    marsoniansGame.state.add('game', marsonians.bootState);
    marsoniansGame.state.add('dead', marsonians.bootState);


    // Start boot state
    marsoniansGame.state.start('boot');
}();
