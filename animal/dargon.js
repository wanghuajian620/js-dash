/**
 * 2017-09-22    Wang Huajian
 */

const c = require('./bird');
function dargon(){

};
dargon.prototype = {
    can7 : 'attack',
    d  : function(){
        console.log('dargon')
    }
};
dargon.prototype.__proto__ = c.prototype;
module.exports = dargon;