/* ==========================================================================
   Marsonians - Shake
   ========================================================================== */

var marsonians = marsonians || {};

marsonians.shakeWorld = function() {

    var exports = this.shakeWorld;


    var shakeWorld = 0,
        shakeWorldMax = 20,
        shakeWorldTime = 0,
        shakeWorldTimeMax = 40;


    // Init
    exports.shake = function(time) {
        shakeWorldTime = time;
    };


    // Update
    exports.update = function() {
        if (shakeWorldTime > 0) {
            var magnitude = ( shakeWorldTime / shakeWorldTimeMax ) * shakeWorldMax;
            var rand1 = marsoniansGame.rnd.integerInRange(-magnitude,magnitude);
            var rand2 = marsoniansGame.rnd.integerInRange(-magnitude,magnitude);

            marsoniansGame.world.setBounds(rand1, rand2, marsoniansGame.width + rand1, marsoniansGame.height + rand2);
            shakeWorldTime--;

            if (shakeWorldTime == 0) {
                marsoniansGame.world.setBounds(0, 0, marsoniansGame.width, marsoniansGame.height); // normalize after shake?
            }
        }
    };
};



// // global vars, or attach them to the current state
// var shakeWorld = 0;
// var shakeWorldMax = 20;
// var shakeWorldTime = 0;
// var shakeWorldTimeMax = 40;
//
// // on update
// if (shakeWorldTime > 0) {
//    var magnitude = ( shakeWorldTime / shakeWorldTimeMax ) * shakeWorldMax;
//    var rand1 = game.rnd.integerInRange(-magnitude,magnitude);
//    var rand2 = game.rnd.integerInRange(-magnitude,magnitude);
//     game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
//     shakeWorldTime--;
//     if (shakeWorldTime == 0) {
//         game.world.setBounds(0, 0, game.width,game.height); // normalize after shake?
//     }
// }
//
// // then, whenever you want the shake to be triggered (bullet fired, land on ground, boss appearance, etc.)
// shakeWorldTime = shakeWorldTimeMax;
