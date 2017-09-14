/**
 * 2017-09-14
 */

var object = { 
    boolean : true,
    number: 1,
    func: function(){
        console.log(`boolean => ${this.boolean}, number => ${this.number}, func => ${this.func}`)
    },
};

object.func();
