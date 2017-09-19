/**
 * 
 */

console.log(`typeof Function=>${typeof Function}`); 
console.log(`tyof Object=>${typeof Object}`);
console.log(`typeof Function.prototype=>${typeof Function.prototype}`);
console.log(`typeof Object.prototype=>${typeof Object.prototype}`);


console.log(` Object.prototype===Function.prototype=>${ Object.prototype===Function.prototype}`);
console.log(` Object.__proto__===Function.__proto__=>${ Object.__proto__ === Function.__proto__}`);

console.log(`Function.__proto__===Object.prototype=>${Function.proto===Object.prototype}`);
console.log(`type of Function.__proto__===Object.prototype=>${typeof Function.__proto__===Object.prototype}`);
console.log(`Function.prototype===Function.__proto__=>${Function.prototype===Function.__proto__}`);

var car = function() {

};

console.log(`typeof car=>${typeof car}, ${car.__proto__}`);
console.log(`car.__proto__===Function.prototype=>${car.__proto__ === Function.prototype}`);
console.log(`car.__proto__===Function.__proto__=>${car.__proto__===Function.__proto__}`);
console.log(`typeof Object.__proto__=>${typeof Object.__proto__}`);
console.log(`typeof Function.__proto__=>${typeof Function.__proto__}`);

console.log(`Function.__proto__===car.__proto__=>${Function.__proto__===car.__proto__}`);
console.log(`car.Object=>${Object.prototype.__proto__}`);
console.log(`car.Object===Object.prototype.__proto__=>${car.Object===Object.prototype.__proto__}`);
console.log(Object.prototype.__proto__);
console.log(car.prototype.__proto__);
console.log(`Object.prototype===Object.prototype.__proto__=>${Object.prototype===Object.prototype.__proto__}`);
 console.log(`Function.__proto__ === Function${Function.__proto__===Function}`);
 console.log(Function.__proto__);