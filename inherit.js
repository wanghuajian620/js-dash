/**
 * 2017-09-23 Wang Huajian
 */

/*        first   method   inherit
function animal(){
    this.species = 'mammal';
};
animal.prototype.species = 'mammal';

function cat(name){
    animal.apply(this,arguments);
    this.name = name
} 
var x = new cat('pdd');
console.log(x);

cat.species = 'bird';
console.log(animal.prototype.species);
*/


/*                    second  method  inherit
function animal(){};
function bird(){};
function fish(){};

bird.prototype = animal.prototype;
bird.prototype.constructor = bird;
fish.prototype = animal.prototype;  
fish.prototype.constructor = fish
bird.prototype.food = 'water';
var x = new bird();
console.log(x.food);
var y = new fish();
console.log(y.food);
*/


/*
var X = function(){};
function animal(){};
X.prototype = animal.prototype;
function cat(){};
cat.prototype = new X();
cat.prototype.constructor = cat;
animal.prototype.food = 'fish';
console.log(X.prototype.food);
console.log(cat.prototype.food);
*/


/*
function aixiao(child, parent){
    var x = parent.prototype;
    var y = child.prototype;
    for(var z in x){
    y[z] = x[z];
    }
  y.uber = x;
};
*/







