/**
 *  2017-09-18  Huajian  Wang
 */

/*
function add(x){
    return this.a+ x;

}
var  a = 1;
add(2);
console.log(add(2));
*/


/*
var obj = {
    a: 1,
    add: function(x){
        return function(){
            console.log(`this.a -> ${this.a}`)
            return this.a + x;
        }
    }
}

console.log(obj.add(2)());
setTimeout(obj.add(2),20000);
*/


/*
var obj = {
    a : 1,
    add : function(x){
        this.b = 4;
        this.c = 3;
        return this.a + x;
    }
};
console.log(obj.add(4), obj.b, obj.c);
*/



if(a=4, a<i, a++){
    var i = 10,
    i = i + a 
};
console.log(a,i);
