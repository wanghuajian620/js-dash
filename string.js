/**
 * 2017-09-17 Huajian Wang
 */

var somthing = 'hello world';
var newsomthing = 'new world';
console.log('------------charAt-------------');
console.log(somthing.charAt(0));
console.log(somthing.charAt(1));
console.log(somthing.charAt(5));

console.log('------------concat-------------');
console.log(somthing.concat('yes', 'no'));

console.log('------------includes-------------');
console.log(somthing.includes('or'));
console.log(somthing.includes('To'));
console.log(somthing.includes('that'));
console.log(somthing.includes('mmp'));

console.log('------------endsWith-------------');
console.log(somthing.endsWith('welemon'));
console.log(somthing.endsWith('banana'));
console.log(somthing.endsWith('save',4));

console.log('------------indexOf-------------');
console.log(somthing.indexOf('he ', 0));
console.log(somthing.indexOf('he ', -1));
console.log(somthing.indexOf('ld ', 20));

console.log('------------lastIndexOf-------------');
console.log(somthing.lastIndexOf('r'));
console.log(somthing.lastIndexOf(-1));
console.log(somthing.lastIndexOf('l ', 3));

console.log('------------padEnd-------------');
console.log(somthing.padEnd(15));
console.log(somthing.padEnd(20,'moo'));
console.log(somthing.padEnd(-1));

console.log('------------padStart-------------');
console.log(somthing.padStart(15));
console.log(somthing.padStart(20,'noo'));
console.log(somthing.padStart(-5));

console.log('------------repeat-------------');
// console.log(somthing.repeat(-1));
console.log(somthing.repeat(1));
console.log(somthing.repeat(2.5));

console.log('------------replace-------------');
console.log(somthing.replace());

console.log('------------slice-------------');
console.log(somthing.slice(2,5));
console.log(somthing.slice(4,8));

console.log('------------split-------------');
console.log(somthing.split('o w', 3));
console.log(somthing.split('', 0));
console.log(somthing.split('', -1));
console.log(somthing.split('', 5));
console.log(somthing.split('', 7));
console.log(somthing.split('', 6));

console.log('------------startsWith-------------');
console.log(somthing.startsWith('hello'));
console.log(somthing.startsWith('world'));
console.log(somthing.startsWith('world', 6));
console.log(somthing.startsWith('world', -1));


console.log('------------substr-------------');
console.log(somthing.substr(1,2));
console.log(somthing.substr(-1,1));
console.log(somthing.substr(-5,4));

console.log('------------substring-------------');
console.log(somthing.substring(0,3));
console.log(somthing.substring(0,12));

console.log('------------toString-------------');
console.log(newsomthing.toString());

console.log('------------trim-------------');
console.log(somthing.trim(''));

console.log('------------trimLeft-------------');
console.log(somthing.trimLeft(''));

console.log('------------trimRight-------------');
console.log(somthing.trimLeft(''));
