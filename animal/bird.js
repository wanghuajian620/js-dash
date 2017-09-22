/**
 * 2017-09-22  Wang  Huajian
 */

const a = require('./animal');
function bird(){

};
bird.prototype = {
    can3 : 'run',
    can4 : 'eat',
    b : function(){
        console.log('bird')
    }};
bird.prototype.__proto__ = a.prototype;
module.exports = bird;


