/**
 * 2017-09-15  Wang Huajian
 */

var o = Object.create(null, {
    foo: {
        enumerable:true,
        writable: true,
        configurable: true,
        value: 'hello'
    }, 
    bar: {
        enumerable:true,
        writable: true,
        configurable: true,
        value: 'hello'
    }
});
Object.getOwnPropertyNames(o)
console.log(Object.getOwnPropertyNames(o));
