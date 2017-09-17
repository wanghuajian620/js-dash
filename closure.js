/**
 * 2017-09-16   Huajian Wang
 */

var closure = function(x){
    return function(y){
        return y / x
    }
} 
var a = closure(2);
var b = a(4);
console.log(b);
