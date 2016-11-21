/* ==========================================================================
   Marsonians - Game
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.game = function() {
    // Set globals
    window.gameCanvas = document.getElementById('game');
    // window.globDevicePixelRatio = window.devicePixelRatio;
    window.globDevicePixelRatio = 1;
    window.globWidth = window.innerWidth * globDevicePixelRatio;
    window.globHeight = window.innerHeight * globDevicePixelRatio;
    window.globLifeCount = 3;
    window.globAlienCount = 3;
    window.globShootSpeed = 3;
    window.globAliensFront = undefined;
    window.globAliensBack = undefined;


    // Start Phaser Game
    window.marsoniansGame = new Phaser.Game(
        globWidth, globHeight,
        Phaser.AUTO,
        'game'
    );


    // Setup Parts
    marsonians.cursor();
    marsonians.score();
    marsonians.pause();
    marsonians.alien();
    marsonians.difficulty();
    marsonians.life();
    marsonians.audio();
    marsonians.shakeWorld();
    marsonians.gameBackground();


    // Add states
    marsoniansGame.state.add('boot', marsonians.bootState);
    marsoniansGame.state.add('preload', marsonians.preloadState);
    marsoniansGame.state.add('menu', marsonians.menuState);
    marsoniansGame.state.add('game', marsonians.gameState);
    marsoniansGame.state.add('dead', marsonians.deadState);


    // Start boot state
    marsoniansGame.state.start('boot');

    // Prevent Right click
    // document.addEventListener('contextmenu', function(e) {
    //      e.preventDefault();
    // });
}();
