/* ==========================================================================
   Marsonians - Cursor
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.cursor = function() {

    var exports = this.cursor;

    var cursorImg = undefined;


    var move = function(e) {
        if (marsoniansGame.input.mouse.locked) {
            cursorImg.x += e.movementX;
            cursorImg.y += e.movementY;
        }
    };


    var requestLock = function() {
        marsoniansGame.canvas.removeEventListener('click', requestLock, false);
        marsoniansGame.input.mouse.requestPointerLock();
    };


    exports.init = function() {
        cursorImg = marsoniansGame.add.image(marsoniansGame.world.centerX, marsoniansGame.world.centerY, 'cursor');

        marsoniansGame.canvas.addEventListener('click', requestLock, false);
        document.addEventListener('mousemove', move, false);
    };
};
