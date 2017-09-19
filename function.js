/**
 * 
 */


var a = {};
var add = function(){
    this.age = 20;
}
console.log(add.apply(a), a);



var  m = {
    name : 'xiaoming'
};
var fun = function(){
    this.fruit = 'apple';    
}
console.log(fun.apply(m),m);
console.log(fun.bind(m)(),m);
