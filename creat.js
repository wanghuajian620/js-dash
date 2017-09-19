/**
 * 2017-09-19  Wang  Huajian
 */

var person = {
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

var a = [1, 2, 3, 4];
var b = 'hello world';
console.log(typeof a,typeof b);
console.log(a.__proto__);
console.log(b.__proto__);
console.log(`a.__proto__===Function.__proto__=>${a.__proto__===Function.__proto__}`);
