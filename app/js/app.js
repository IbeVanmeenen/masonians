/* ==========================================================================
   Marsonians
   ========================================================================== */

'use strict';

var marsonians = marsonians || {};

marsonians.app = function(undefined) {

    // App: Init
    var appInit = function() {
        marsonians.game();
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
