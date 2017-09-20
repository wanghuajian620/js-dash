/**
 * 2017-09-19  Wang  Huajian
 */

/*var person = {
    age : 2,
    name :  'Wang'
};

var a = Object.create(person,{age:{age:4}});
console.log(a.__proto__);

person.luck = function(){
    return   4;
}
var a  = Object.create(person,{
    age: {
        value : 20
    }
})

console.log(a.luck());


var b = Object.create(person,{});
console.log(a.age, b.age);
*/

var a = [1, 2, 3, 4];
//console.log(typeof a,typeof b);
//console.log(a.__proto__);
//console.log(b.__proto__);
console.log(a.__proto__ === Object.prototype);
console.log(a.__proto__.__proto__=== Object.prototype);
console.log(a.__proto__=== Array.prototype);
//console.log(`a.__proto__ === Function.__proto__=>${a.__proto__ === Function.__proto__}`);
console.log('......................over......................');

var x = 123;
//console.log(typeof x);
console.log( x.__proto__=== Object.prototype);
console.log( x.__proto__.__proto__ === Object.prototype);
console.log(x.__proto__ === Number.prototype);

var y = true;
//console.log(typeof y);
console.log(y.__proto__ === Object.prototype);
console.log(y.__proto__.__proto__ === Object.prototype);
console.log(y.__proto__ === Boolean.prototype);

var b = 'hello world';
console.log(b.__proto__ === Object.prototype);
console.log(b.__proto__.__proto__ ===  Object.prototype);
console.log(b.__proto__ === String.prototype);

console.log(Function.prototype.constructor === Function);
console.log(Array.prototype.constructor === Array);
console.log(Number.prototype.constructor === Number);
console.log(Boolean.prototype.constructor === Boolean);
console.log(String.prototype.constructor === String);

console.log(a.__proto__ === Function.__proto__);
console.log(x.__proto__ === Function.__proto__);
console.log(y.__proto__ === Function.__proto__);
console.log(b.__proto__ === Function.__proto__);

console.log(a.__proto__.__proto__ === Function.prototype.__proto__);
console.log(a.__proto__.__proto__ === Object.prototype);
console.log( x.__proto__=== Object.prototype);









