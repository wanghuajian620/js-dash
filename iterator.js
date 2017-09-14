/**
 * 2017-09-19
 */

var arr = [1, 2, 3, 4, 5];

var func = function(abc) {
    return 3 * abc;
};

console.log(arr.map(func));

arr = [1, 2, 3, 4, 5, 6, 7, 8];
var k = arr.filter(function(abc) {
    return abc >= 3;
});

console.log(arr.filter(function(abc) {
    return abc >= 3;
}));

var arr = [1, 2, 3, 4, 5, 6, 7, 8];    
var k = arr.reduce(function(prev, next) {
    return prev + next;
})
console.log(arr.reduce(function(prev, next) {
    return prev + next;
}));