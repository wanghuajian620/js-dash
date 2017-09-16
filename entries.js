/**
 * 2017-09-15  Wang Huajian
 */

var o = Object.create(null, {
    foo: {
        enumerable:false,
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

console.log(Object.entries(o));
