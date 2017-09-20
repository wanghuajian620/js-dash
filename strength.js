/**
 * 2017-09-20  Wang Huajian
 */

/*
var x = Object.create(null,{
    foo:{
        enumerable : true,
        value : 'xiaohong'
    } ,
    bar :{
        enumerable : false,
        value : 1111
    }
});
var y = Object.create(x,{});
console.log(y.foo);



var y = 1111;
Number.prototype.luck = {
    laji : 'hotdog',
};
console.log(y.luck);


 Object.freeze(x);
x.foo = 'xiaowang';
console.log(x.foo);
console.log(x)
*/


var m = Object.create(null,{
    foo:{
        enumerable : true,
        writable : true,
        value : 'xiaohong'
    } ,
    bar :{
        enumerable : false,
        value : 1111
    }
});
 Object.seal(m);
m.foo = 'xiaobai';
console.log(m.foo);