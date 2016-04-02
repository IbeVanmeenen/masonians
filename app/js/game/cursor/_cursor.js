/* ==========================================================================
   Marsonians - Cursor
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.cursor = function() {

    var exports = this.cursor;

    var cursorSprite = undefined;

    var move = function(pointer, x, y) {

        if (marsoniansGame.input.mouse.locked) {
            cursorSprite.x += marsoniansGame.input.mouse.event.webkitMovementX;
            cursorSprite.y += marsoniansGame.input.mouse.event.webkitMovementY;
        }
    };


    var requestLock = function() {
        marsoniansGame.input.mouse.requestPointerLock();
    };


    exports.init = function() {
        // cursorSprite = marsoniansGame.add.sprite(marsoniansGame.world.centerX, marsoniansGame.world.centerY, 'crosshair');
        // //
        // marsoniansGame.debug.pointer(marsoniansGame.input.activePointer);
        // //
        // marsoniansGame.canvas.addEventListener('mousedown', requestLock);
        // marsoniansGame.input.addMoveCallback(move, this);
    };
};
