/**
 * 2017-09-15  Wang Huajian
 */

var o = Object.create(null, {
    foo: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 1
    },
    bar: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 2
    },
});

var n = Object.defineProperty(o, 'name', {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 8888
});

n.a = 1;
console.log(n, o);

var arr = [1, 2];

Object.defineProperty(arr, '4', {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 128
});

console.log(arr);

Object.defineProperty(arr, 'length', {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 4
});
