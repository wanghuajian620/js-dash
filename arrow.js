var  x = (app) => {
    this.age = 'wanghuajian'
};
//var a = x();
x();
console.log(x.prototype);
console.log(x);
console.log(x.age, this.age);

//var y  = new x();
//console.log(typeof y.prototype);

