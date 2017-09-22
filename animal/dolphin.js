/**
 * 2017-09-22   Wang Huajian
 */

const y = require('./fish');
function dolphin(){

};
dolphin.prototype = {
    can0 : 'hand',
    g : function(){
        console.log('dolphin.g')
    }
};
dolphin.prototype.__proto__ = y.prototype;
module.exports = dolphin;