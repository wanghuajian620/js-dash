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

var k = function(x){
    var b = {
        age : 1
    };
    return  b;
};
var a = k();
var c = k();
console.log(a,c);


var counter = 1;
var k = function(x){
    var b = {
        age : counter++
    };
    return  b;
};
var a = k();
var c = k();
console.log(a,c);


var a =function(x){
    var apple = 1;

    return function(){
        var obj = {
            age : apple
        }

        apple += x;
        return obj;
    };
};
var b = a(3);
console.log(b(), b(), b(), b());


