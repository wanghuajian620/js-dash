/**
 * 2017-09-22    Wang Huajian
 */

const b = require('./animal');
function fish(){

} ;
fish.prototype = {
    can5 : 'kill',
    can6 : 'save',
    c : function(){
        console.log('fish.c')
    }
};
fish.prototype.__proto__ = b.prototype;
module.exports = fish;