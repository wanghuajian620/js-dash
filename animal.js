/**
 * 2017-09-20   Wang Huajian
 */


function animal(){

};
animal.prototype = {
    can1 : 'fly',
    can2  : 'swim',
    a: function(){
       console.log('animal')
    }
};

function bird(){
};
bird.prototype = {
    can3 : 'run',
    can4 : 'eat',
    b : function(){
        console.log('bird')
    }  
};
bird.prototype.__proto__ = animal.prototype;

function fish(){

};
fish.prototype = {
    can5 : 'kill',
    can6 : 'save',
    c : function(){
        console.log('fish.c')
    }
};
fish.prototype.__proto__ = animal.prototype;
function dargon(){

};
dargon.prototype = {
    can7 : 'attack',
    d  : function(){
        console.log('dargon')
    }
};
dargon.prototype.__proto__ = bird.prototype;
function chicken(){

};
chicken.prototype = {
    can8 : 'drink',
     e:function(){
        console.log('chicken')

    }
};
chicken.prototype.__proto__ = bird.prototype;
function shark(){

};
shark.prototype = {
    can9 : 'attacked',
    f : function(){
        console.log('shark')
    }
};
shark.prototype.__proto__ = fish.prototype;
function dolphin(){

};
dolphin.prototype = {
    can0 : 'hand',
    g : function(){
        console.log('dolphin.g')
    }
};
dolphin.prototype.__proto__ = fish.prototype;
console.log(bird.prototype.__proto__);
console.log(dargon.prototype.__proto__);

var z = new dolphin();
var x = new shark();
var y = new dargon();
var h = new chicken();
z.g();
console.log(z.can0);
z.c();
x.c();
y.b();
y.a();
shark.prototype.__proto__.c();
shark.prototype.__proto__.__proto__.a();
console.log(shark.prototype.__proto__.c());// because  animal  no  return value, so results undefined.  delete console.log() is  ok.
 
//console.log(typeof Object.create(function(){} ,{}));
//console.log(typeof Object.create(function(){}.prototype ,{}));
