/**
 * 2017-09-22  Wang Huajian
 */

const x = require('./fish');
function shark(){

};
shark.prototype = {
    can9 : 'attacked',
    f : function(){
        console.log('shark')
    }
};
shark.prototype.__proto__ = x.prototype;
module.exports = shark; 