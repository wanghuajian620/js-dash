/**
 * 2017-09-15  Wang Huajian
 */

var o = Object.create(null, {
    foo: {
        enumerable: true,
        writable: true,
        configurable: true,
        value: 20
    },
    bar: {
        enumerable: false,
        writable: true,
        configurable: true,
        value: 'hello'
    }
});

var target = {};
Object.assign(target, o);
console.log(target, o);
console.log(target.bar, o.bar);
