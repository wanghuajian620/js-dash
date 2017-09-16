/**
 * 2017-09-15  Wang Huajian
 */

var a = function() {
};

a.object = {
    age: 20
};

a.array = [1, 2, 3, 4];

a.fun = function() {
    console.log('a.fun triggered');
};

Object.defineProperty(a, 'fun', {
    enumerable: false
});

Object.defineProperty(a, 'len', {
    enumerable: true,
    get: function () { return this.array.length }
});

console.log(Object.keys(a), Object.getOwnPropertyNames(a));

console.log(a.len);

a.array.length = 10;

console.log(a.len);

a.fun();
