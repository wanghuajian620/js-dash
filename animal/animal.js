/**
 * 2017-09-22  Wang Huajian
 */

function animal(){

} ;
animal.prototype = {
    can1 : 'fly',
    can2  : 'swim',
    a: function(){
       console.log('animal')
    }};
module.exports = animal;
