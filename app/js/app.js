'use strict';

/* ==========================================================================
   Marsonians
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.app = function(undefined) {


    // App: Init
    var appInit = function() {

        var phaserGame = new Phaser.Game(
            800, 600,
            Phaser.AUTO,
            'game-container',
            {
                init: init,
                preload: preload,
                update: update,
                create: create
            }
        );

        var marsoniansGame = new MarsoniansGame(phaserGame);

        // Game: Init
        function init() {
            marsoniansGame.init();
        };

        // Game: Preload
        function preload() {
            marsoniansGame.preload();
        };

        // Game: Create
        function create() {
            marsoniansGame.create();
        };

        // Game: Update
        function update() {
            marsoniansGame.update();
        };
    }();
};

var ready = function(fn) {
    // Sanity check
    if (typeof(fn) !== 'function') return;

    // If document is already loaded, run method
    if (document.readyState === 'complete') {
        return fn();
    }

    // Otherwise, wait until document is loaded
    document.addEventListener('DOMContentLoaded', fn, false);
};

ready(function() {
    marsonians.app();
});
