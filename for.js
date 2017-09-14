/**
 * 2017-09-14    Wang Huajian
 */

var x = 0;
for(var i = 0; i <= 3333; i++) {
  x = x + i*3;
}
console.log(x);
x; 





var fib = [1,1];
for(var n = 2;n  <=100;n++){
    fib[n]=fib[n -1 ] + 2 * fib[n - 2];
}
console.log(fib);    