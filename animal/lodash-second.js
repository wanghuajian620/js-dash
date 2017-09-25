/**
 * 2017-09-25   Wang Huajian
 */

const _ = require('lodash') ; 

var a = [1, 3, 5, 7, 9];
console.log(_.tail(a)); 

console.log('-------take-------');
var b = [1,2,4,5];
console.log(_.take(b,3));

console.log('-------takewhile-----');
var x = [
    { 'x': 'milk',  'active': false },
    { 'x': 'food',    'active': false },
    { 'x': 'meat', 'active': true }
  ];
  console.log(_.takeWhile(x, function(o){return !o.active}));
  console.log(_.takeWhile(x,{'x': 'milk', 'active': false}));
  console.log(_.takeWhile(x,'active'));