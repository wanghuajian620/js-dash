/**
 * 2017-09-22       Wang Huanjian
 */

const d = require('./bird');
function chicken(){

};
chicken.prototype = {
    can8 : 'drink',
     e:function(){
        console.log('chicken')

    }
};
chicken.prototype.__proto__ =d.prototype;
module.exports = chicken; 