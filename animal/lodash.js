/**
 * 2017-09-21  Wang Huajian
 */

const _ = require('lodash') ;
/*
var a = [1, 2, 3, 4, 5];
console.log(_.difference(a,[1, 2, 3]));
var b = [1.1, 2.5];
console.log(_.differenceBy(b, [1.5, 3.0], Math.floor));
console.log(_.drop([2, 3, 4]));
console.log(_.drop([2, 3, 4], 0));
console.log(_.drop([2, 3, 4],-1));

console.log(_.fill(a,'x'));
console.log(_.fill(Array(5),2));
console.log(_.fill(Array(3),2));
console.log(_.fill([4, 6, 8, 10], '*', 1, 3));// * behind ,1 and 3  is  change  seat( 6 to 10) but [1 ,3).so  [6, 10)
console.log(_.fill([1, 2, 3], '*', 1, 4));

var x = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
  ];
console.log(_.findIndex(x,function(o){return o.user == 'barney'}));
console.log(_.findIndex(x, {'user' : 'fred', 'active' : false}));
console.log(_.findIndex(x,['active',false]));// from left to right  count  first,  so   it   is   seat(0)
console.log(_.findIndex(x,'active'));// if don't write  true or false, then defalut value is  true.

console.log(_.findLastIndex(x,['active',false]));
*/
//var a = [['b', 8],['c' , 6]];
//console.log(_.fromPairs(a));


// var a = [1, 2, 3, 4, 5];
// console.log(_.sortedIndexOf([1, 2, 3, 4, 5],3));

arr = [1, 2, 3, 4, 5, 6, 7, 8];
var k = arr.filter(function(abc) {
    return abc >= 3;
});
// filter 条件性的筛选出我们想要的
console.log(arr.filter(function(abc) {
    return abc >= 3;
}));
console.log('...........filter...........')


// var objects = [{ 'a': 1 }, { 'b': 2 }];

// var deep = _.cloneDeep(objects);
// console.log(deep[0] === objects[0]);
console.log('.................ddddd............')

// var apple = {'a':1};
var objects = [{ 'a': 1 }, arr=[1,2]];
var deep = _.clone(objects);
var deep1 = _.cloneDeep(objects);
console.log(deep);
console.log(deep1);
console.log(deep[0]===deep1[0]);
// console.log(deep === 'a');