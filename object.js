/**
 * 2017-09-14
 */

var object = { 
    boolean : true,
    number: 1,
    func: function(){
        console.log(`boolean => ${this.boolean}, number => ${this.number}, func => ${this.func}`)
    },
};

object.func();

var o = Object.create(null, {
    foo: {
        writable: true,
        configurable: true,
        value: 'hello'
    },
    bar: {
        configurable: false,
        get: function() { return 10;},
        set: function(value) {
            console.log(`setting 'o.bar' to, ${value}`);
        }
    }
});
console.log(`typeof o: ${typeof o},${Object.getPrototypeOf(o)}`);
console.log(Object.getOwnPropertyDescriptor(o, 'foo'));
console.log(JSON.stringify(Object.getOwnPropertyDescriptor(o, 'foo')));


o.name = 'hi';
console.log(Object.keys(o));

var arr = ['a', 'b', 'c'];
arr['name'] = 'hi';
arr.age = 20;
console.log(Object.keys(arr));
console.log(arr['0']);
console.log(arr.name);
console.log(`typeof arr:${typeof arr}`,Object.getPrototypeOf(arr));


var a = function (){
    console.log('hello');
};
a.age = 20;
console.log(Object.keys(a));
console.log(a.age);
a();
console.log(`typeof a:${typeof a}, ${Object.getPrototypeOf(a)}`);
