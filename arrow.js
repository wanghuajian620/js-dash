/**
 * 2017-09-23  Wang Huajian
 */


var  x = (app) => {                 //  arrow[=>] function  don't have prototype.
    this.age = 'wanghuajian'
};
x();
console.log(x.prototype);
console.log(x);
console.log(x.age, this.age);    //this this is stable, it's not x invoked, it  is  (app)=>  invoke.

//var y  = new x();
//console.log(typeof y.prototype);

