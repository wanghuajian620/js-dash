/**
 * 2017-09-16  Huajian Wang
 */

var a = function(){
    return  function(x){
        return x+5
    }
};
var b =  a() ;
var c = b(1);
console.log(c);

/*
b.a = 'name';

var d = a();
d.a= 'age';

console.log(b.a, d.a);

console.log(a()(2));
*/
