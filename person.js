/**
 * 2017-09-19  Hujian Wang
 */

var person = function(age){
    this.age = age;
}

var Wang  = new person(20);

var ss = new person(10);

person.prototype.getAge = function(){
    return this.age + 2;
}
console.log(Wang.getAge(), ss.getAge())

Wang.get = function(){
    return 1;
};
ss.fruit = function(){
    return 6;
};
person.prototype.pdd = function(){
    return 'apple';
}; 
Object.prototype.honey = function(){
    return 20000;
}


//console.log(Wang.getfruit(),ss.getName());
console.log(typeof Wang.get.prototype);
console.log(person.__proto__===Function.prototype);
console.log(Wang.get.__proto__===Function.prototype);
console.log(ss.fruit__proto__===Function.prototype);
console.log(Wang.pdd());
console.log(Wang.honey());
console.log(`person.pdd=>${person.pdd}`);

 